from dataclasses import dataclass
from datetime import datetime, timezone

@dataclass(frozen=True)
class AuditEvent:
    event_id: str
    tenant_id: str
    principal_id: str
    resource_type: str
    resource_id: str
    operation: str
    correlation_id: str
    timestamp: str

def create_audit_event(event_id, tenant_id, principal_id, resource_type,
                       resource_id, operation, correlation_id):
    return AuditEvent(event_id, tenant_id, principal_id, resource_type,
                      resource_id, operation, correlation_id,
                      datetime.now(timezone.utc).isoformat())
