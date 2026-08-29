# MICRA FIELD SURVEY MASTER FORM v1.1 — CSE Integrated

Mobile-first field webform for G-ENV CSE-01..CSE-07.

Implemented in this MVP:
- mandatory/optional fields
- unit-aware numeric validation ranges
- browser GPS capture with accuracy
- automatic timestamp
- photo capture input
- observer/evidence confidence
- environmental interaction scoring
- RAW local persistence and JSON export

Supabase persistence is prepared by `schema.sql`, but must not be activated with public permissive policies in production. Use authenticated users and least-privilege RLS before collecting real field data.

Target workflow: RAW -> VALIDATED -> VERIFIED -> BASELINE -> GEF EVIDENCE.
