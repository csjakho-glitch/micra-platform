from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum

class FarmState(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    ARCHIVED = "ARCHIVED"

@dataclass(frozen=True)
class Farm:
    id: str
    tenant_id: str
    name: str
    state: FarmState = FarmState.ACTIVE
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

@dataclass(frozen=True)
class FarmBaseline:
    id: str
    farm_id: str
    tenant_id: str
    pond_area_ha: float
    baseline_version: int = 1
    recorded_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

@dataclass(frozen=True)
class FarmOperationalState:
    id: str
    farm_id: str
    tenant_id: str
    status: str
    recorded_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
