class TenantIsolationError(Exception):
    pass

def assert_same_tenant(principal_tenant_id: str, resource_tenant_id: str) -> None:
    if principal_tenant_id != resource_tenant_id:
        raise TenantIsolationError("cross-tenant access denied")
