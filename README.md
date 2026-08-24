# MICRA Platform OS

Canonical repository for the MICRA Platform OS.

This repository is initialized under the frozen MICRA architecture and populated through controlled repository consolidation and implementation migration.

## Repository Status

- Architecture: Frozen
- Repository Blueprint: Frozen
- I-05 Consolidation: Baseline established
- I-02/I-03 reference artifacts: Consolidated
- Canonical TypeScript R0/R1 build slice: In progress
- PostgreSQL/PostGIS runtime verification: Pending
- GitHub Actions verification: Pending / no run observed yet
- G-ENV: Not yet passed

## Canonical stack

- Node.js 24 LTS
- TypeScript
- Next.js 16.x
- NestJS
- PostgreSQL + PostGIS
- Prisma ORM
- pnpm workspace

## Authority

The Frozen Master Architecture and approved architecture decision records are authoritative. Repository structure and implementation must conform to those constraints. Reference Python artifacts from I-02/I-03 are preserved as migration/conformance evidence and are not treated as production runtime code.

## Build gate

The intended sequence is:

`install → typecheck → test → build → database/runtime verification → G-ENV`
