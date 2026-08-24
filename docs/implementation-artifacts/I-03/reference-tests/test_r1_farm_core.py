import unittest
from micra.foundation.iam import IAM, Principal
from micra.foundation.tenant import TenantIsolationError
from micra.farm.domain import FarmBaseline, FarmOperationalState
from micra.farm.persistence import FarmRepository
from micra.farm.service import FarmService

class R1FarmCoreTests(unittest.TestCase):
    def setUp(self):
        self.iam = IAM()
        self.repo = FarmRepository()
        self.service = FarmService(self.repo, self.iam)
        self.a = Principal("USER-A", "TENANT-A", frozenset({"admin"}))
        self.b = Principal("USER-B", "TENANT-B", frozenset({"admin"}))
        self.service.create_farm(self.a, "FARM-A", "Farm A")
        self.service.create_farm(self.b, "FARM-B", "Farm B")

    def test_create_and_get_same_tenant(self):
        farm = self.service.get_farm(self.a, "FARM-A")
        self.assertEqual(farm.tenant_id, "TENANT-A")

    def test_cross_tenant_farm_read_denied(self):
        with self.assertRaises(TenantIsolationError):
            self.service.get_farm(self.a, "FARM-B")

    def test_baseline_belongs_to_farm_and_tenant(self):
        baseline = FarmBaseline("BASELINE-A", "FARM-A", "TENANT-A", 0.5)
        self.service.record_baseline(self.a, baseline)
        self.assertEqual(self.repo.get_baseline("BASELINE-A").farm_id, "FARM-A")

    def test_operational_state_belongs_to_farm_and_tenant(self):
        state = FarmOperationalState("OPSTATE-A", "FARM-A", "TENANT-A", "BASELINE")
        self.service.record_operational_state(self.a, state)
        self.assertEqual(self.repo.get_operational_state("OPSTATE-A").status, "BASELINE")

    def test_cross_tenant_baseline_denied(self):
        baseline = FarmBaseline("BASELINE-X", "FARM-A", "TENANT-B", 0.5)
        with self.assertRaises(TenantIsolationError):
            self.service.record_baseline(self.b, baseline)
