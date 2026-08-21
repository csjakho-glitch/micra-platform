class ValidationError(Exception):
    pass

def require_fields(payload: dict, fields):
    missing = [f for f in fields if payload.get(f) in (None, "")]
    if missing:
        raise ValidationError("missing required fields: " + ",".join(missing))
    return True
