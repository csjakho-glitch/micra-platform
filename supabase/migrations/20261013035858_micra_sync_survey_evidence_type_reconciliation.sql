-- MICRA migration: reconcile survey-to-evidence type with canonical evidence_records constraint.
-- Keeps the existing trigger and preserves all other field mappings.
create or replace function public.micra_sync_survey_evidence()
returns trigger
language plpgsql
set search_path to 'public'
as $function$
begin
  insert into public.evidence_records (
    survey_id,
    evidence_id,
    evidence_type,
    domain,
    parameter,
    value,
    confidence,
    status,
    observer_id
  )
  values (
    new.id,
    new.evidence_id,
    'observation',
    'CSE',
    'field_observations',
    new.payload,
    new.confidence,
    new.status,
    new.observer_id
  );

  return new;
end;
$function$;
