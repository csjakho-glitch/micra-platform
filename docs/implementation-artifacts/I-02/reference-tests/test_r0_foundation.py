import unittest
from micra.foundation.iam import IAM, Principal, Permission, AuthorizationError
from micra.foundation.tenant import assert_same_tenant, TenantIsolationError
from micra.foundation.evidence import make_evidence_ref, verify_integrity
from micra.foundation.validation import require_fields, ValidationError
from micra.foundation.observability import sanitize
from micra.foundation.harness import DeterministicHarness

class R0FoundationTests(unittest.TestCase):
    def setUp(self):
        self.iam = IAM()
        self.admin = Principal("u1", "t1", frozenset({"admin"}))
        self.viewer = Principal("u2", "t1", frozenset({"viewer"}))

    def test_admin_write_allowed(self):
        self.assertTrue(self.iam.authorize(self.admin, Permission("farm", "write")))

    def test_viewer_write_denied(self):
        with self.assertRaises(AuthorizationError):
            self.iam.authorize(self.viewer, Permission("farm", "write"))

    def test_cross_tenant_denied(self):
        with self.assertRaises(TenantIsolationError):
            assert_same_tenant("t1", "t2")

    def test_same_tenant_allowed(self):
        self.assertIsNone(assert_same_tenant("t1", "t1"))

    def test_evidence_integrity(self):
        ref = make_evidence_ref("e1", "t1", "obj/e1", b"abc")
        self.assertTrue(verify_integrity(ref, b"abc"))
        self.assertFalse(verify_integrity(ref, b"tampered"))

    def test_validation(self):
        self.assertTrue(require_fields({"farm_id": "f1"}, ["farm_id"]))
        with self.assertRaises(ValidationError):
            require_fields({}, ["farm_id"])

    def test_sensitive_observability_redaction(self):
        out = sanitize({"token": "secret-value", "farm_id": "f1"})
        self.assertEqual(out["token"], "[REDACTED]")
        self.assertEqual(out["farm_id"], "f1")

    def test_deterministic_reset_seed(self):
        h = DeterministicHarness()
        fixture = {"tenant": "t1", "farm": "f1"}
        self.assertEqual(h.seed(fixture), h.seed(fixture))
