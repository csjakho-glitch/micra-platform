# MICRA BUILD CONTRACT v1.0

**Status:** FROZEN  
**Purpose:** implementation control contract for MICRA repository work and Copilot agents.

## 1. Build chain

`Architecture → Domain Contract → Implementation Spec → Code → Test → CI → Deploy`

No production deployment may bypass a failed required validation gate.

## 2. Authority

The Frozen Master Architecture and approved architecture decisions remain authoritative. This contract governs implementation discipline; it does not supersede architecture.

## 3. Non-negotiable rules

1. Frozen architecture is not changed implicitly.
2. Domain contracts are canonical.
3. Database changes use versioned migrations.
4. MICRA operational data uses RLS.
5. Supabase service-role credentials are server-side only.
6. Secrets are never committed.
7. User-facing features require validation and tests appropriate to their risk.
8. CI must pass before merge when CI is configured for the affected scope.
9. Deployment must be traceable to a reviewed commit.
10. Evidence provenance must survive every transformation.

## 4. Change levels

L0 documentation; L1 UI/local logic; L2 application logic; L3 API/domain contract; L4 database/RLS/security; L5 architecture.

L3-L5 require explicit architecture review.

## 5. Definition of done

A task is complete only when its acceptance criteria are met and all applicable validation results are reported. A deployment being reachable is not equivalent to functional acceptance.
