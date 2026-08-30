# MICRA ARCHITECTURE GUARDRAILS v1.0

**Status:** FROZEN

## Protected principles

- Conform to the frozen MICRA architecture and approved repository blueprint.
- Prefer existing canonical contracts over duplicate types.
- Do not introduce alternate persistence, authentication, or API models merely for convenience.
- Do not modify unrelated modules while implementing a scoped task.
- Do not add native Web/Mobile product scope unless explicitly approved. The CSE field-survey web application is already an approved implementation scope.
- Runtime/build foundation remains a prerequisite for broader platform expansion.

## CSE boundary

`apps/cse-field-survey` is a bounded field-data collection application. It may use Supabase Auth, PostgreSQL, Storage, and RLS as explicitly approved by the CSE implementation task.

The CSE application must not silently become a general MICRA platform dashboard, marketplace, investor product, or unrelated mobile/native application.

## Evidence boundary

CSE is a measurement/evidence collection layer. It may calculate screening metrics, but must not represent screening results as formal environmental impact assessments or verified GEF claims unless the required evidence and verification gates are satisfied.

## Architecture-sensitive changes

Any change to canonical domain contracts, API contracts, authentication/authorization model, database security model, or top-level repository architecture is L3-L5 and requires explicit review.
