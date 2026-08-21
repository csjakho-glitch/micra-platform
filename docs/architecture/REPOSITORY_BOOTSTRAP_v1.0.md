# MICRA Repository Bootstrap v1.0

## Status
BOOTSTRAP — implementation intentionally excluded.

## Purpose
Establish the canonical repository skeleton for consolidation of existing MICRA implementation artifacts.

## Canonical application boundaries
- apps/web-admin
- apps/web-farmer
- apps/web-field-officer
- apps/web-farm-officer
- apps/web-offtaker
- apps/web-investor
- apps/field-mobile

## Canonical logical service boundaries
- api-gateway
- identity
- farm
- assessment
- digital-twin
- retrofit
- engineering
- hydraulic-tidal
- equipment
- boq-cost
- implementation
- operations
- risk
- mrv
- supplier-input
- analytics
- economics
- reporting
- data-quality
- ai

## Canonical engine boundaries
- risk-rules
- engineering-calculation
- hydraulic-tidal
- equipment-selection
- boq-cost
- farm-economics
- data-quality
- predictive-ai

## Canonical shared packages
- api-contracts
- domain-types
- validation
- auth-rbac
- event-contracts
- units
- geospatial
- ui

## Database boundary
PostgreSQL/PostGIS with migrations, seeds, functions and policies.

## Verification state
This bootstrap does not claim runtime verification. It prepares the repository for I-02/I-03 consolidation and subsequent G-ENV execution.
