# MICRA Repository Reconciliation — D Patch v1.0

## Scope

This patch reconciles the repository with the already-existing canonical Supabase database.

**Supabase DDL is intentionally not changed by this patch.**

## Canonical model

The live database is authoritative for:

- `profiles`
- `farms`
- `farm_members`
- `survey_records`
- `evidence_records`
- `verification_records`
- `baseline_records`
- `gef_evidence_records`
- private Storage bucket `survey-photos`

Lifecycle:

`RAW → VALIDATED → VERIFIED → BASELINE → GEF EVIDENCE`

## Repository changes

### CSE write path

`apps/cse-field-survey/index.html` now writes only to `survey_records`.

It no longer inserts `evidence_records` directly. Evidence synchronization is owned by the canonical database domain trigger `micra_sync_survey_evidence()`.

This prevents two competing evidence-write paths.

### Legacy schema

`apps/cse-field-survey/schema.sql` is explicitly marked **LEGACY / NON-CANONICAL**.

The old `public.cse_surveys` table, uppercase statuses, and anonymous allow-all policies must not be recreated.

### Type contract

`lib/micra/types.ts` now constrains evidence confidence to:

`E0 | E1 | E2 | E3 | E4`

matching the live Supabase enum.

## Known live-database blocker

The live function `micra_sync_survey_evidence()` currently writes:

`evidence_type = 'field_observation'`

while the live `evidence_records` constraint accepts the canonical evidence types:

`observation | measurement | photo | gps | interview | document`

This is a **live Supabase schema/function mismatch**.

It is deliberately **not fixed in this patch**, because the requested scope explicitly forbids Supabase DDL changes.

The correct next migration must reconcile this function with the canonical evidence-type contract before a real CSE lifecycle test can pass.

## Lifecycle test status

A live end-to-end lifecycle test requires an authenticated MICRA user.

At audit time the project contains:

- auth users: 0
- profiles: 0
- farms: 0
- survey records: 0

Therefore no authenticated lifecycle actor currently exists for a legitimate RLS-based test.

A transaction-level insert test can still verify the current trigger/constraint mismatch; it must be treated as a diagnostic test, not a successful lifecycle acceptance test.

## Acceptance boundary

This patch is repository-only.

No:

- `ALTER TABLE`
- `CREATE POLICY`
- `DROP POLICY`
- `CREATE OR REPLACE FUNCTION`
- extension change
- PostGIS change
- RLS change

is performed by this patch.
