# MICRA IMPLEMENTATION RULES v1.0

**Status:** FROZEN

## Repository discipline

- Keep changes scoped to the approved task.
- Prefer existing code/contracts over duplication.
- Keep database migrations deterministic and reviewable.
- Keep secrets outside source control.
- Do not make production-only assumptions that cannot be tested locally or in preview.

## CSE application rules

- `apps/cse-field-survey` is a bounded field-data collection application.
- Its approved backend is Supabase Auth + PostgreSQL + Storage + RLS.
- GPS and photo evidence must retain timestamp/provenance.
- Validation ranges must prevent impossible values while allowing legitimate field variation.
- Screening calculations must preserve component inputs and formulas.
- Evidence confidence must not be upgraded automatically merely because a record was submitted.

## Environment

Client-safe variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or legacy anon key where explicitly supported)

Server-only secret:

- `SUPABASE_SERVICE_ROLE_KEY`

The server-only secret must never be exposed to browser code.

## Release discipline

Use preview/development validation before production. A deployment URL is not an acceptance test; functional, persistence, security and browser verification are required.
