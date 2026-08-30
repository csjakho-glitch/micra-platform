# MICRA DOMAIN CONTRACTS v1.0

**Status:** FROZEN

## Core domain areas

- Farm Baseline
- Pond
- Water System
- Aquaculture Operation
- Environmental
- Socio-Ecological
- Evidence
- Risk
- Cluster
- Governance

## Coastal Socio-Ecological (CSE)

### CSE-01 — Tidal Dynamics
Measures tidal influence and water-exchange mechanism, including pond/channel/tidal water levels, timing, and electricity dependence.

### CSE-02 — Hydrological Connectivity
Measures shared channels, connected ponds, common inlet/outlet pathways, direction of flow, tidal connectivity, and water reuse.

### CSE-03 — Existing Mangrove
Records presence, location, area, tidal connectivity, condition, and visible disturbance of existing mangrove assets.

### CSE-04 — Community Access
Records public/community access routes, use frequency, users, seasonal use, and aquaculture-related obstruction/conflict.

### CSE-05 — Coastal Resource Use
Records crab, oyster, clam and other coastal-resource harvesting, location, users, frequency, reported harvest and dependency.

### CSE-06 — Tourism
Records beach recreation/tourism, access points, visitor activity, seasonality, conflict and disturbance.

### CSE-07 — Environmental Interaction
Screens interaction pathways:

- Pond → Channel
- Pond → Mangrove
- Channel → Mangrove
- Pond → Coast
- Aquaculture → Community Resource
- Aquaculture → Tourism

Screening score is `Connectivity × Exposure × Consequence`, each 0-3. It is a screening metric, not a formal EIA conclusion.

## Evidence record minimum

Each evidence record should preserve, where applicable:

`evidence_id, farm_id, cluster_id, domain, parameter, value, unit, observer, timestamp, GPS, photo/source, confidence, status, verification provenance`.

## Evidence confidence

- E0 — claim only
- E1 — single observation
- E2 — observation plus supporting evidence
- E3 — multi-source verified
- E4 — repeated monitoring

GEF evidence should derive from verified evidence and retain traceability to source records.
