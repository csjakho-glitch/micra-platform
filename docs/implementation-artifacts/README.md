# MICRA Implementation Artifact Consolidation

Status: CONSOLIDATED REFERENCE ARTIFACTS

This directory preserves previously generated MICRA I-02 and I-03 implementation artifacts with provenance.

These artifacts were created before the canonical production technology stack was locked. They are therefore **reference/conformance artifacts**, not the authoritative TypeScript/NestJS runtime implementation.

Rules:
- Do not treat these Python prototypes as the production runtime.
- Do not create a parallel Farm/Risk/Engineering schema from them.
- Preserve behavioral tests and contract intent as migration inputs.
- Canonical runtime implementation must conform to the frozen MICRA architecture and the locked production technology stack.
- I-03 must reuse the consolidated I-02 foundation; duplicated foundation files from the I-03 archive are intentionally not imported.

Source artifacts:
- I-02-R0-Foundation-Actual-Repository-v1.0.zip
- I-03-R1-Farm-Digital-Core-Actual-Repository-v1.0.zip

Verification performed before consolidation:
- I-02 Python unit tests: 8/8 PASS
- I-03 combined Python unit tests: 13/13 PASS
- PostgreSQL/PostGIS runtime: NOT VERIFIED
- HTTP API runtime: NOT VERIFIED
- Production identity provider: NOT VERIFIED
- G-ENV/G-FIX/G-CONTRACT: NOT VERIFIED
