# MICRA Copilot Engineering Instructions v1.0

## Status

This file is part of the **MICRA COPILOT IMPLEMENTATION PACK v1.0** and is frozen as an implementation guardrail.

## Source-of-truth hierarchy

1. Frozen MICRA Master Architecture and approved Architecture Decision Records
2. MICRA Technology Stack Lock and approved repository/build baselines
3. `docs/micra/MICRA_BUILD_CONTRACT_v1.0.md`
4. `docs/micra/MICRA_ARCHITECTURE_GUARDRAILS_v1.0.md`
5. `docs/micra/MICRA_DOMAIN_CONTRACTS_v1.0.md`
6. Approved task specification / GitHub issue
7. Existing implementation
8. Prompt-level convenience requests

If sources conflict, **stop and report the conflict**. Do not silently redesign the architecture.

## Core engineering rules

- MICRA is a regenerative shrimp aquaculture operating system.
- The architecture is frozen unless an explicit architecture-change decision is approved.
- Implement the smallest change that satisfies the approved task.
- Do not refactor unrelated modules.
- Do not introduce a new framework, runtime, package, domain model, or persistence pattern without approval.
- The currently approved `apps/cse-field-survey` application is an explicit exception to the general feature-freeze rule: it may be implemented and hardened according to the approved CSE task.

## Supabase security

- Browser code may use only `NEXT_PUBLIC_SUPABASE_URL` and the Supabase publishable/anon key.
- **Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code, `NEXT_PUBLIC_*` variables, Git, HTML, or client bundles.**
- Database changes require migrations.
- Operational tables must use RLS.
- Storage buckets containing field evidence must remain private unless an explicit security review approves otherwise.
- Authenticated access must be least-privilege and role-aware.

## Evidence integrity

MICRA evidence follows:

`RAW → VALIDATED → VERIFIED → BASELINE → GEF EVIDENCE`

Do not convert an unverified field statement into GEF evidence. Preserve evidence IDs, timestamps, GPS, observer, source type, confidence, and verification provenance.

## CSE domains

CSE-01 Tidal Dynamics
CSE-02 Hydrological Connectivity
CSE-03 Existing Mangrove
CSE-04 Community Access
CSE-05 Coastal Resource Use
CSE-06 Tourism
CSE-07 Environmental Interaction

## Testing

Every implementation must run the applicable checks before being considered complete:

- syntax/type validation
- lint/static checks when configured
- unit/integration tests when configured
- build/deployment validation
- security/RLS checks for Supabase changes
- browser verification for user-facing changes

Do not bypass a failing check. Report the exact failure and smallest safe repair.

## Change classification

- L0 documentation
- L1 UI/local logic
- L2 application logic
- L3 API/domain contract
- L4 database/RLS/security
- L5 architecture

L3-L5 changes require explicit architecture review.

## Required completion report

At task completion report:

1. files changed
2. architecture impact (L0-L5)
3. database/storage changes
4. environment variables
5. security/RLS impact
6. tests executed and results
7. deployment/browser verification status
8. remaining risks/blockers
