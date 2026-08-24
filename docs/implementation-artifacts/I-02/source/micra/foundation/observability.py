from dataclasses import dataclass

@dataclass(frozen=True)
class TraceContext:
    request_id: str
    correlation_id: str
    tenant_id: str
    principal_id: str
    farm_id: str | None = None

SENSITIVE_KEYS = {"password", "secret", "token", "authorization"}

def sanitize(payload: dict) -> dict:
    return {k: "[REDACTED]" if k.lower() in SENSITIVE_KEYS else v
            for k, v in payload.items()}
