# MICRA Evidence Type Reconciliation & Lifecycle Acceptance — 2026-10-13

## Scope
This change reconciles the survey insert trigger with the canonical `public.evidence_records.evidence_type` check constraint. G-ENV remains closed.

## Live database findings before migration
- Project: `fenextlufbesfclptjui`
- Applied migration history before change:
  - `20260829054644_micra_cse_field_survey_v1_1`
  - `20260904082811_r0_runtime_foundation_security`
  - `20260904084318_phase2_wp01_evidence_workflow`
- Trigger: `trg_micra_sync_survey_evidence`, AFTER INSERT on `public.survey_records`, enabled.
- Trigger function originally wrote `evidence_type = 'field_observation'`.
- Canonical constraint permits `observation`, `measurement`, `photo`, `gps`, `interview`, `document`.

## Migration applied
Version: `20261013035858_micra_sync_survey_evidence_type_reconciliation`

The function now writes `evidence_type = 'observation'`. It preserves the existing mappings for survey_id, evidence_id, domain CSE, parameter field_observations, payload value, confidence, status, observer_id, and returns NEW. The existing trigger was retained.

Repository mirror:
`supabase/migrations/20261013035858_micra_sync_survey_evidence_type_reconciliation.sql`

## Verification
- Migration is present in Supabase migration history: PASS.
- Function definition now uses `observation`: PASS.
- Constraint remains canonical and unchanged: PASS.
- Existing trigger remains enabled and attached to `survey_records`: PASS.
- Existing evidence type rows outside the allowed set: 0 (table currently has 0 rows).
- Security advisor still reports pre-existing findings for `spatial_ref_sys`, PostGIS in public, and SECURITY DEFINER functions. These were not modified by this task.

## Lifecycle test status
NOT RUN / BLOCKED. The project currently has 0 Auth users, 0 profiles, 0 farms, and 0 survey records. Available connected Supabase actions do not expose the Auth Admin create-user API, and no test email has been supplied for an Auth-managed signup/invite. No rows were inserted using a privileged SQL shortcut, and no lifecycle PASS is claimed.

Required next action:
1. Create/invite a dedicated test account through Supabase Auth (Dashboard or Auth Admin API) with a verified email.
2. Ensure the trigger creates its profile, then verify `role='surveyor'` and `active=true`.
3. Use authenticated clients with distinct surveyor, verifier, and admin identities for the full lifecycle; a single surveyor account cannot legitimately perform verifier/admin-only transitions.
4. Test denial paths and confirm exactly one canonical evidence row is synchronized for each survey.
5. Record all results before opening G-ENV.
