# MICRA Repository Reconciliation — R0 → WP-01 → CSE → Supabase

Status: ACTIVE RECONCILIATION / architecture-preserving

## Canonical decisions

1. The application canonical survey table is `public.survey_records`, because both the Next.js assessments UI and the CSE field application write/read this relation.
2. `public.cse_surveys` is legacy bootstrap schema and must not become a second parallel canonical survey model.
3. Canonical status values are lowercase:
   - raw
   - validated
   - verified
   - baseline
   - gef_evidence
   - rejected
4. Evidence is represented separately in `public.evidence_records` and retains provenance to its survey record.
5. Evidence lifecycle is strictly:
   RAW → VALIDATED → VERIFIED → BASELINE → GEF EVIDENCE.
6. Authorization is authenticated, role-aware, and RLS-protected. No anonymous read/write policy is acceptable for operational survey/evidence data.
7. Field evidence storage remains private and is addressed through authenticated access.

## Required reconciliation order

### R0 — Identity/RBAC
- Verify Auth session server-side.
- Verify `profiles` role is authoritative for authorization.
- Roles: surveyor, verifier, admin.
- Do not authorize from user-editable metadata.

### WP-01 — Survey record
- Reconcile `survey_records` columns to `SurveyRecord` in `lib/micra/types.ts`.
- Preserve evidence_id, farm_id, cluster_id, observer_id, survey_timestamp, GPS, payload, status, confidence, verification provenance and timestamps.

### CSE — Field survey
- Keep the seven frozen CSE domains.
- CSE writes to `survey_records`.
- CSE creates linked `evidence_records`.
- No write to `cse_surveys`.

### Supabase — Security and schema
- Replace bootstrap anon policies with least-privilege authenticated policies.
- Enable RLS on operational tables.
- Scope access by authenticated identity and MICRA role.
- Protect evidence storage.
- Apply schema changes only through versioned migrations after the live project is reachable.

## Current blockers

The connected Supabase project `fenextlufbesfclptjui` was observed as INACTIVE and, after restore was requested, transitioned to COMING_UP. Direct SQL/list-table verification currently returns connection timeout/ECONNREFUSED. Therefore live schema mutation is intentionally NOT performed until database connectivity is restored.

## Acceptance gates

1. Live tables verified.
2. Canonical survey/evidence schema verified.
3. RLS policies verified and bootstrap anon access removed.
4. TypeScript typecheck passes.
5. Next.js production build passes.
6. GitHub Actions CI passes.
7. Browser/runtime verification passes.
8. Raw → Validated → Verified → Baseline is exercised against live Supabase.
9. G-ENV remains closed until all gates pass.
