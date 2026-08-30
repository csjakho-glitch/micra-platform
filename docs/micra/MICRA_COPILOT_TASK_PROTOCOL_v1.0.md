# MICRA COPILOT TASK PROTOCOL v1.0

**Status:** FROZEN

Every Copilot implementation task must define:

- Task ID
- Objective
- Scope
- Non-scope
- Affected modules
- Required inputs
- Expected outputs
- Database/storage changes
- API changes
- UI changes
- Validation
- Security requirements
- Tests
- Acceptance criteria
- Architecture constraints

## Operating modes

### IMPLEMENT
Write only the code required by the approved task.

### VERIFY
Inspect/test/diagnose without changing code.

### REPAIR
Fix only an identified failure, with the smallest safe change.

## Completion report

Copilot must report:

1. files changed
2. architecture impact
3. database/storage changes
4. environment variables
5. security/RLS impact
6. tests and results
7. deployment/browser verification
8. remaining risks/blockers

## Conflict rule

If implementation requires an L3-L5 architectural change, stop and request architecture review rather than silently changing the contract.
