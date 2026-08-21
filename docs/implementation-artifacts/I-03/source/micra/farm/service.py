from micra.foundation.iam import IAM, Permission
from micra.foundation.tenant import assert_same_tenant
from .domain import Farm, FarmBaseline, FarmOperationalState
from .persistence import FarmRepository

class FarmService:
    def __init__(self, repo=None, iam=None):
        self.repo = repo or FarmRepository()
        self.iam = iam or IAM()

    def create_farm(self, principal, farm_id, name):
        self.iam.authorize(principal, Permission("farm", "write"))
        farm = Farm(id=farm_id, tenant_id=principal.tenant_id, name=name)
        return self.repo.save_farm(farm)

    def get_farm(self, principal, farm_id):
        self.iam.authorize(principal, Permission("farm", "read"))
        farm = self.repo.get_farm(farm_id)
        if farm is None:
            return None
        assert_same_tenant(principal.tenant_id, farm.tenant_id)
        return farm

    def record_baseline(self, principal, baseline):
        self.iam.authorize(principal, Permission("farm", "write"))
        assert_same_tenant(principal.tenant_id, baseline.tenant_id)
        farm = self.repo.get_farm(baseline.farm_id)
        if farm is None:
            raise ValueError("farm not found")
        assert_same_tenant(principal.tenant_id, farm.tenant_id)
        return self.repo.save_baseline(baseline)

    def record_operational_state(self, principal, state):
        self.iam.authorize(principal, Permission("farm", "write"))
        assert_same_tenant(principal.tenant_id, state.tenant_id)
        farm = self.repo.get_farm(state.farm_id)
        if farm is None:
            raise ValueError("farm not found")
        assert_same_tenant(principal.tenant_id, farm.tenant_id)
        return self.repo.save_operational_state(state)
