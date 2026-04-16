# syntax=docker/dockerfile:1
FROM python:3.12-slim
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DEFAULT_TIMEOUT=600
COPY requirements.txt .
# Délais / retries élevés : évite ReadTimeoutError si PyPI est lent (réseau instable).
RUN pip install --no-cache-dir --default-timeout=600 --retries=15 -r requirements.txt
COPY main.py .
EXPOSE 8090
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8090"]
