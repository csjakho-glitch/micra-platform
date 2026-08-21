-- I-03B persistence contract.
-- Reference artifact only. Execution against PostgreSQL/PostGIS is NOT VERIFIED.
-- This file must be reconciled with the canonical physical schema before becoming
-- an authoritative migration under database/migrations.

CREATE TABLE IF NOT EXISTS farm (
    id TEXT PRIMARY KEY,
    tenant_id TEXT NOT NULL,
    name TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS farm_baseline (
    id TEXT PRIMARY KEY,
    farm_id TEXT NOT NULL REFERENCES farm(id),
    tenant_id TEXT NOT NULL,
    pond_area_ha DOUBLE PRECISION NOT NULL,
    baseline_version INTEGER NOT NULL DEFAULT 1,
    recorded_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS farm_operational_state (
    id TEXT PRIMARY KEY,
    farm_id TEXT NOT NULL REFERENCES farm(id),
    tenant_id TEXT NOT NULL,
    status TEXT NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_farm_tenant ON farm(tenant_id);
CREATE INDEX IF NOT EXISTS idx_baseline_farm ON farm_baseline(farm_id);
CREATE INDEX IF NOT EXISTS idx_opstate_farm ON farm_operational_state(farm_id);
