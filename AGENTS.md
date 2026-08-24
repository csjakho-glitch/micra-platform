# MICRA Engineering Agent Rules

## Authority
1. Frozen Master Architecture
2. Approved ADRs
3. Software Build Baseline
4. Repository & Module Implementation Blueprint
5. Existing implementation contracts
6. Task instructions

Higher-level constraints win when sources conflict.

## Non-negotiable rules
- Do not silently change frozen architecture.
- Do not create a second canonical schema or API contract.
- Do not bypass IAM/RBAC or tenant isolation.
- Do not put secrets in the repository.
- Do not delete or weaken tests to make a build pass.
- Do not duplicate deterministic business logic between services and engines.
- Keep migrations deterministic and reviewable.
- Preserve existing I-02 and I-03 implementation artifacts during consolidation.
- Record architectural changes through ADRs.

## Verification
Every implementation change should run the narrowest applicable checks and report them. G-ENV must not be marked PASS without actual runtime evidence.
