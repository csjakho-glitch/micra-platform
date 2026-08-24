from dataclasses import dataclass
from datetime import datetime, timezone
import hashlib

@dataclass(frozen=True)
class EvidenceRef:
    id: str
    tenant_id: str
    object_key: str
    sha256: str
    created_at: str

def make_evidence_ref(evidence_id, tenant_id, object_key, content: bytes) -> EvidenceRef:
    digest = hashlib.sha256(content).hexdigest()
    return EvidenceRef(
        id=evidence_id,
        tenant_id=tenant_id,
        object_key=object_key,
        sha256=digest,
        created_at=datetime.now(timezone.utc).isoformat(),
    )

def verify_integrity(ref: EvidenceRef, content: bytes) -> bool:
    return hashlib.sha256(content).hexdigest() == ref.sha256
