# Python answer-inference microservice

This folder contains a **non–Spring Boot microservice** written in **Python**. It supports the course requirement: add at least one microservice that is **not** Java/Spring.

## Purpose

When a student **finishes** an evaluation, the system estimates, per question, whether the student **likely knew** the answer or **likely guessed**. The result is one of three labels:

| Label        | Meaning (heuristic)                                      |
|-------------|-------------------------------------------------------------|
| **KNEW**    | Behaviour + score suggest solid understanding.              |
| **GUESSED** | Behaviour + score suggest guessing or weak understanding. |
| **UNCERTAIN** | Not enough signal, or service unavailable.              |

This is **not** mind-reading. It uses **score**, **time on question**, and **how often the student changed** selections (and similar signals). It is suitable for demos, analytics, and instructor dashboards.

---

## Technology

- **Python 3.12+** (as used in your environment)
- **FastAPI** — HTTP API
- **Uvicorn** — ASGI server
- **Pydantic** — request/response validation

Dependencies are listed in `requirements.txt` (`fastapi`, `uvicorn`, `pydantic`, etc.).

---

## How it fits in the overall architecture

```
┌─────────────┐     submit answers + timing metadata      ┌──────────────────┐
│   Angular   │ ─────────────────────────────────────────► │  API Gateway     │
│  (frontend) │                                            │  (Spring Cloud)  │
└─────────────┘                                            └────────┬─────────┘
       ▲                                                              │
       │  results page / backoffice shows                             │ /evaluation/**
       │  knowledgeInference per answer                               ▼
       │                                                    ┌──────────────────┐
       └────────────────────────────────────────────────────│ evaluation       │
                                                              │ microservice     │
                                                              │ (Spring Boot)    │
                                                              └────────┬─────────┘
                                                                       │
                                       POST /infer (after scoring)     │
                                                                       ▼
                                                              ┌──────────────────┐
                                                              │  This service    │
                                                              │  FastAPI :8090   │
                                                              └──────────────────┘
```

1. While taking a test, the **frontend** records **seconds on each question** (from first time that question is shown until submit) and **selection-change counts** (MCQ changes, MSQ toggles after first pick, fill-blank drag moves).
2. Each **submit answer** request sends that metadata to the **evaluation** service, which stores it on `StudentAnswer`.
3. When the student **finishes** the attempt, the evaluation service **computes scores** as before (MCQ/MSQ/FILL_BLANK rules, AI for READING/WRITING if configured).
4. For **each saved answer**, the evaluation service calls **`POST http://<base-url>/infer`** on this Python app with question type, timing, changes, points, awarded score, and whether the answer counts as “fully correct” for inference.
5. Python returns **`label`** (`KNEW` / `GUESSED` / `UNCERTAIN`). Java persists it in **`knowledgeInference`** on `StudentAnswer`.
6. The **student results** page and **backoffice attempts** view read that field from the API and display it.

The **browser does not call Python directly** for inference during normal use; the **evaluation** service calls Python **server-to-server**. The gateway also exposes an optional route so you can hit the Python API through the same host as the rest of the app (see below).

---

## API

### `GET /health`

Returns `{ "status": "ok" }` for quick checks.

### `POST /infer`

**Request body (JSON):**

| Field | Type | Description |
|--------|------|-------------|
| `question_type` | string | `MCQ`, `MSQ`, `FILL_BLANK`, `READING`, `WRITING` |
| `time_on_question_sec` | number (optional) | Seconds from first view to submit (capped upstream). |
| `selection_change_count` | integer (optional) | Rough count of answer changes. |
| `max_points` | number | Question max points. |
| `score_awarded` | number | Points awarded after grading. |
| `is_fully_correct` | boolean | Computed in Java (see note below). |
| `text_answer_length` | integer | Length of text answer (for open questions). |

**“Fully correct” in Java (for inference):**

- **READING / WRITING:** `score_awarded / max_points >= 0.85`
- **Other types:** full points (approximately `score_awarded >= max_points`)

**Response body (JSON):**

| Field | Type | Description |
|--------|------|-------------|
| `label` | string | `KNEW`, `GUESSED`, or `UNCERTAIN` |
| `confidence` | number | Internal score in `[0, 1]` (for transparency / future use). |
| `reason` | string | Short English explanation (for logs or future UI). |

**Implementation file:** `main.py` — function `infer_knowledge()` applies the heuristic rules (correct vs wrong, fast vs slow, few vs many changes, open-answer length).

---

## Configuration (Spring / Config Server)

In **`config-repo/evaluation.properties`**:

```properties
answer-inference.python.base-url=http://localhost:8090
```

The **evaluation** service reads this and builds `POST {base-url}/infer`.

- If the URL is **empty**, Java skips the HTTP call and stored labels fall back to **`UNCERTAIN`** (via empty `Optional`).
- If Python is **down** but the URL is set, the client catches errors and also yields **`UNCERTAIN`**.

Restart **config-server** and **evaluation** after changing this file so they reload config.

---

## Gateway (optional HTTP path)

In the Spring Cloud **Gateway**, a route forwards:

- **`/api/answer-inference/**`** → **`http://localhost:8090`** (with prefix stripped),

so you can test e.g. `http://localhost:8080/api/answer-inference/health` when the gateway runs on `8080`. The evaluation service still talks to Python on **`8090`** directly using `answer-inference.python.base-url`.

---

## Database (evaluation microservice)

On entity **`StudentAnswer`** (MySQL via JPA, `ddl-auto=update` in your setup), extra fields include:

- **`time_on_question_seconds`** — from frontend.
- **`selection_change_count`** — from frontend.
- **`knowledge_inference`** — `KNEW` / `GUESSED` / `UNCERTAIN`, set when the attempt is **finished**.

---

## Frontend behaviour (summary)

- **`take-evaluation`**: per question, tracks time from first display and bumps a counter when the student changes MCQ/MSQ/fill-blank choices.
- **`submitAnswer`** payload includes `timeOnQuestionSeconds` and `selectionChangeCount`.
- **`evaluation-results`** and **`evaluation-attempts`** show the stored inference when `knowledgeInference` is present.

---

## How to run locally

From **this directory** (`backend/microservices/python-predict`):

```powershell
cd "C:\Users\lpatron\OneDrive\Desktop\innnnn\SAIF\backend\microservices\python-predict"
python -m pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8090
```

- **Swagger UI:** http://127.0.0.1:8090/docs  
- **Health:** http://127.0.0.1:8090/health  

Keep this terminal open while testing end-to-end with the evaluation service.

---

## Project layout (this microservice)

| File | Role |
|------|------|
| `main.py` | FastAPI app, `/health`, `/infer`, heuristic logic. |
| `requirements.txt` | Python dependencies. |

---

## Troubleshooting

| Issue | What to check |
|--------|----------------|
| Labels always **UNCERTAIN** | Python not running, wrong port, or `answer-inference.python.base-url` missing/wrong; check evaluation logs for `Answer inference service unavailable`. |
| **`pip` / `requirements.txt` not found** | Current directory must be **`python-predict`**, not `backend` or repo root. |
| **`Could not import module "main"`** | Run Uvicorn from **`python-predict`** so `main.py` is on the module path. |
| **`GET /favicon.ico` 404** | Harmless; the browser requests a favicon that this API does not serve. |

---

## Summary

This microservice is a **small, independent Python HTTP service** that the **evaluation** Spring Boot microservice calls **after grading** an attempt. Together with **metadata from the Angular client**, it produces **per-answer labels** that the UI shows to students and instructors, satisfying the **“non–Spring Boot microservice”** part of the project while staying integrated with the existing evaluation flow.
