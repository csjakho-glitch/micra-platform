# MICRA COPILOT IMPLEMENTATION PACK v1.0

**Status: FROZEN**  
**Freeze date:** 2026-08-30  
**Repository:** `csjakho-glitch/micra-platform`

## Cross-reference review result

Reviewed against the current repository baseline, current `apps/cse-field-survey` implementation, approved MICRA architecture constraints, and the Supabase-backed CSE scope.

### Corrections incorporated before freeze

1. **Web/mobile scope wording corrected.** The pack no longer prohibits all Web/Mobile work. The approved CSE field-survey web application is explicitly in scope; unapproved expansion remains prohibited.
2. **Static CSE implementation recognized.** The current app is a bounded static HTML application, not a Next.js application. The pack therefore does not impose Next.js as an implementation requirement.
3. **Supabase security clarified.** Publishable/anon credentials may be client-visible; service-role credentials remain server-only and must never enter browser code.
4. **Evidence claims constrained.** CSE screening scores are not formal EIA findings, and unverified observations cannot become GEF evidence.
5. **Architecture-change control strengthened.** L3-L5 changes require explicit architecture review.
6. **Deployment acceptance strengthened.** A reachable Vercel URL is not equivalent to functional, persistence, security, or browser acceptance.

## Pack manifest

- `.github/copilot-instructions.md`
- `docs/micra/MICRA_BUILD_CONTRACT_v1.0.md`
- `docs/micra/MICRA_ARCHITECTURE_GUARDRAILS_v1.0.md`
- `docs/micra/MICRA_DOMAIN_CONTRACTS_v1.0.md`
- `docs/micra/MICRA_IMPLEMENTATION_RULES_v1.0.md`
- `docs/micra/MICRA_TEST_ACCEPTANCE_CONTRACT_v1.0.md`
- `docs/micra/MICRA_COPILOT_TASK_PROTOCOL_v1.0.md`
- `docs/micra/MICRA_COPILOT_IMPLEMENTATION_PACK_v1.0.md`

## Current repository baseline reviewed

The repository currently contains the bounded CSE application under `apps/cse-field-survey` and the canonical repository README identifies the architecture as frozen. The current CSE client is already Supabase-aware, but its credentials are embedded in the static client and must be migrated to the approved environment-variable/build strategy by CSE-IMPLEMENT-001.

## Freeze rule

The above documents constitute the frozen Copilot implementation-control layer. Future changes require a new version (v1.1+) or an explicitly documented amendment. Copilot tasks must follow this pack unless a higher-authority MICRA architecture decision supersedes it.
