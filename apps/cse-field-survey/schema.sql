create extension if not exists pgcrypto;
create table if not exists public.cse_surveys (
 id uuid primary key default gen_random_uuid(), evidence_id text unique not null, farm_id text not null, cluster_id text not null,
 observer text not null, survey_at timestamptz not null, gps_lat double precision, gps_lon double precision, gps_accuracy_m double precision,
 payload jsonb not null, status text not null default 'RAW' check(status in ('RAW','VALIDATED','VERIFIED','BASELINE','GEF_EVIDENCE')),
 confidence text, created_at timestamptz not null default now(), verified_at timestamptz, baseline_at timestamptz, gef_evidence_at timestamptz
);
alter table public.cse_surveys enable row level security;
-- Development bootstrap only. Replace with authenticated, least-privilege policies before production.
create policy "cse insert bootstrap" on public.cse_surveys for insert to anon with check(true);
create policy "cse select bootstrap" on public.cse_surveys for select to anon using(true);
