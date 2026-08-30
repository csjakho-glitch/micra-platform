# MICRA TEST & ACCEPTANCE CONTRACT v1.0

**Status:** FROZEN

## CSE E2E acceptance sequence

1. Application loads
2. Surveyor authentication succeeds
3. Authenticated profile/session is available
4. GPS capture succeeds or a controlled permission/error state is reported
5. CSE-01 through CSE-07 validate required inputs
6. Photo capture/upload succeeds for supported formats
7. `survey_records` INSERT succeeds
8. `evidence_records` INSERT succeeds
9. `survey-photos` Storage upload succeeds
10. Surveyor is denied unauthorized restricted access
11. Verifier workflow can verify an eligible record
12. Admin workflow can create baseline from verified evidence
13. GEF evidence cannot be created from unverified source data
14. Production build/deployment check passes

## Required reporting

For each test: `PASS | FAIL | BLOCKED`, with exact error, environment, and evidence where applicable.

## Security acceptance

- No service-role key in client bundle.
- RLS enabled on operational tables.
- Storage bucket remains private.
- Unauthorized cross-user access is denied.
- Privileged transitions are role-controlled.

## Data acceptance

A successful HTTP/deployment response is insufficient. The test must confirm persistence and authorization behavior in the actual Supabase project.
