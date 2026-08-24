# MICRA I-02 / I-03 ACTUAL REPOSITORY CONSOLIDATION v1.0

**Branch:** `feature/repository-bootstrap`
**Status:** CONSOLIDATED — REFERENCE ARTIFACTS PRESERVED; CANONICAL RUNTIME MIGRATION PENDING

## Source artifacts
- `I-02-R0-Foundation-Actual-Repository-v1.0.zip`
- `I-03-R1-Farm-Digital-Core-Actual-Repository-v1.0.zip`

## Verification before consolidation
- I-02 reference tests: **8/8 PASS**.
- I-03 reference tests combined with R0 foundation: **13/13 PASS**.
- The passing tests cover IAM/RBAC behavior, tenant isolation, evidence integrity, validation, observability redaction, deterministic reset/seed, Farm ownership, baseline ownership, and operational-state ownership.

## Consolidation decisions
| Artifact | Decision | Canonical runtime status |
|---|---|---|
| I-02 foundation Python modules | PRESERVE under `docs/implementation-artifacts/I-02/source` | Reference/conformance only |
| I-02 behavioral tests | PRESERVE under `docs/implementation-artifacts/I-02/reference-tests` | Reference tests; not CI runtime tests yet |
| I-03 Farm domain/service/API Python modules | PRESERVE under `docs/implementation-artifacts/I-03/source` | Reference/conformance only |
| I-03 behavioral tests | PRESERVE under `docs/implementation-artifacts/I-03/reference-tests` | Reference tests; not CI runtime tests yet |
| I-03 SQL migration | PRESERVE under `docs/implementation-artifacts/I-03/database` | Reference contract; NOT authoritative migration |
| duplicated I-03 foundation modules | EXCLUDED from import | Reuse consolidated I-02 boundary |
| Python `__pycache__` artifacts | EXCLUDED | Build residue |

## Why Python is not promoted to runtime
The I-02/I-03 artifacts explicitly describe themselves as framework-neutral and not runtime-verified. The production Technology Stack Lock targets TypeScript/Next.js/Expo/NestJS/PostgreSQL. Therefore the Python implementation is retained as behavioral/contract evidence and migration input instead of creating a parallel production stack.

## Required next migration
Translate the verified behavioral intent into the canonical TypeScript implementation while preserving:
- IAM/RBAC semantics;
- tenant isolation;
- evidence integrity/provenance;
- audit/event lineage;
- DQ/validation behavior;
- DFT/Risk/Engineering adapter boundaries;
- Farm/FarmBaseline/FarmOperationalState ownership rules.

The I-03 SQL is **not** promoted to `database/migrations` until reconciled with the canonical PostgreSQL/PostGIS physical schema and master database contract.

## Gate position
`I-02/I-03 artifact provenance` = PASS
`Reference behavior tests` = PASS
`Canonical TypeScript runtime implementation` = PENDING
`PostgreSQL/PostGIS execution` = PENDING
`HTTP API runtime` = PENDING
`G-ENV` = BLOCKED until runtime evidence exists
