from dataclasses import dataclass
from typing import FrozenSet

@dataclass(frozen=True)
class Principal:
    id: str
    tenant_id: str
    roles: FrozenSet[str]

@dataclass(frozen=True)
class Permission:
    resource: str
    action: str

class AuthorizationError(Exception):
    pass

class IAM:
    ROLE_PERMISSIONS = {
        "admin": frozenset({
            "farm:read", "farm:write",
            "assessment:read", "assessment:write",
            "evidence:read", "evidence:write",
        }),
        "viewer": frozenset({"farm:read", "assessment:read", "evidence:read"}),
    }

    def authorize(self, principal: Principal, permission: Permission) -> bool:
        allowed = f"{permission.resource}:{permission.action}" in {
            p for role in principal.roles for p in self.ROLE_PERMISSIONS.get(role, ())
        }
        if not allowed:
            raise AuthorizationError("permission denied")
        return True
