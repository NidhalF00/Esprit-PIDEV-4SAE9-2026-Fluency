"""
Answer knowledge inference: estimates whether the student likely knew the answer or guessed,
using score, time on question, selection changes, and question type.
"""
from __future__ import annotations

import logging
import os
from typing import Any

import requests
from pydantic import BaseModel, Field

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import py_eureka_client.eureka_client as eureka_client

app = FastAPI(title="Answer inference", version="1.0.0")
logger = logging.getLogger(__name__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CONFIG_SERVER_URL = os.getenv("CONFIG_SERVER_URL", "http://localhost:8899").rstrip("/")
CONFIG_APP_NAME = os.getenv("CONFIG_APP_NAME", "python-predict")
CONFIG_PROFILE = os.getenv("CONFIG_PROFILE", "default")


def _load_config_server_properties() -> dict[str, Any]:
    """Optionally read externalized config from Spring Config Server."""
    try:
        response = requests.get(
            f"{CONFIG_SERVER_URL}/{CONFIG_APP_NAME}/{CONFIG_PROFILE}",
            timeout=2.5,
        )
        response.raise_for_status()
        payload = response.json()
        merged: dict[str, Any] = {}
        # Lowest priority first, highest last.
        for source in reversed(payload.get("propertySources", [])):
            merged.update(source.get("source", {}))
        return merged
    except Exception:
        return {}


CONFIG_PROPS = _load_config_server_properties()


def _cfg(key: str, env_key: str, default: Any) -> Any:
    env_value = os.getenv(env_key)
    if env_value is not None and env_value != "":
        return env_value
    value = CONFIG_PROPS.get(key)
    return value if value is not None else default


EUREKA_SERVER_URL = str(
    _cfg("eureka.client.service-url.defaultZone", "EUREKA_SERVER_URL", "http://localhost:8761/eureka/")
)
EUREKA_APP_NAME = str(_cfg("spring.application.name", "EUREKA_APP_NAME", "python-predict"))
SERVICE_HOST = str(_cfg("eureka.instance.hostname", "SERVICE_HOST", "localhost"))
SERVICE_PORT = int(_cfg("server.port", "SERVICE_PORT", 8090))
PREDICT_THRESHOLD_KNOWS = float(_cfg("predict.threshold.knows", "PREDICT_THRESHOLD_KNOWS", 0.62))
PREDICT_TIME_MAX_SECONDS = float(_cfg("predict.time.max_seconds", "PREDICT_TIME_MAX_SECONDS", 120.0))


@app.on_event("startup")
async def register_eureka() -> None:
    try:
        await eureka_client.init_async(
            eureka_server=EUREKA_SERVER_URL,
            app_name=EUREKA_APP_NAME,
            instance_host=SERVICE_HOST,
            instance_port=SERVICE_PORT,
        )
    except Exception as exc:
        # Keep API available even if Eureka is temporarily unavailable.
        logger.warning("Eureka registration failed: %s", exc)


@app.on_event("shutdown")
async def unregister_eureka() -> None:
    try:
        await eureka_client.stop_async()
    except Exception:
        # Ignore shutdown issues to allow clean process exit.
        pass


class InferRequest(BaseModel):
    question_type: str = Field(..., description="MCQ, MSQ, FILL_BLANK, READING, WRITING")
    time_on_question_sec: float | None = Field(default=None, ge=0)
    selection_change_count: int | None = Field(default=None, ge=0)
    max_points: float = Field(default=1.0, ge=0)
    score_awarded: float = Field(default=0.0, ge=0)
    is_fully_correct: bool = False
    text_answer_length: int = Field(default=0, ge=0)


class InferResponse(BaseModel):
    label: str = Field(..., description="KNEW, GUESSED, or UNCERTAIN")
    confidence: float = Field(..., ge=0, le=1)
    reason: str


def _clamp(x: float, lo: float = 0.0, hi: float = 1.0) -> float:
    return max(lo, min(hi, x))


def infer_knowledge(req: InferRequest) -> InferResponse:
    t = float(req.time_on_question_sec or 0.0)
    changes = int(req.selection_change_count or 0)
    max_pts = float(req.max_points) if req.max_points and req.max_points > 0 else 1.0
    awarded = float(req.score_awarded or 0.0)
    ratio = _clamp(awarded / max_pts, 0.0, 1.0)
    text_len = int(req.text_answer_length or 0)

    is_open = req.question_type in ("READING", "WRITING")
    correct = bool(req.is_fully_correct)

    # Base belief in "knew it" (0..1)
    if not correct:
        s = 0.18 + min(0.12, t / 900.0)
        if changes >= 2:
            s -= 0.12
        if ratio <= 0.01 and t < 5:
            s -= 0.05
        reason = "Incorrect or very low score; pattern suggests guessing."
    else:
        s = 0.72
        if t <= 12 and changes <= 1:
            s += 0.18
            reason = "Correct, quick, few changes — likely solid knowledge."
        elif t > PREDICT_TIME_MAX_SECONDS or changes >= 4:
            s -= 0.28
            reason = "Correct but slow or many changes — may have reasoned or guessed."
        elif changes >= 2:
            s -= 0.12
            reason = "Correct after several selection changes — some uncertainty."
        else:
            reason = "Correct answer within typical time."

        if is_open:
            if text_len < 25 and ratio < 1.0:
                s -= 0.15
                reason = "Short open response with partial credit — uncertain mastery."
            elif text_len >= 80 and ratio >= 0.85:
                s += 0.08
                reason = "Substantial answer with strong score — likely understood the task."

    s = _clamp(s)

    if s >= PREDICT_THRESHOLD_KNOWS:
        label = "KNEW"
    elif s <= (1.0 - PREDICT_THRESHOLD_KNOWS):
        label = "GUESSED"
    else:
        label = "UNCERTAIN"

    return InferResponse(label=label, confidence=round(s, 3), reason=reason)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/infer", response_model=InferResponse)
def infer(req: InferRequest):
    return infer_knowledge(req)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=SERVICE_PORT, reload=False)
