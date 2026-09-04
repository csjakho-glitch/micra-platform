export type MicraRole = 'surveyor' | 'verifier' | 'admin';
export type RecordStatus = 'raw' | 'validated' | 'verified' | 'baseline' | 'gef_evidence' | 'rejected';

export type Profile = {
  id: string;
  full_name: string | null;
  role: MicraRole;
  active: boolean;
};

export type Farm = {
  id: string;
  farm_code: string;
  name: string;
  location: string | null;
  area_ha: number | null;
  cluster_id: string | null;
  status: string;
  baseline_score: number | null;
  risk_class: string | null;
  latitude: number | null;
  longitude: number | null;
  created_by: string | null;
};

export type SurveyRecord = {
  id: string;
  evidence_id: string | null;
  farm_id: string;
  cluster_id: string | null;
  observer_id: string;
  survey_timestamp: string;
  latitude: number | null;
  longitude: number | null;
  gps_accuracy_m: number | null;
  payload: Record<string, unknown>;
  status: RecordStatus;
  confidence: string;
  verification_notes: string | null;
  verified_by: string | null;
  verified_at: string | null;
  baselined_by: string | null;
  baselined_at: string | null;
  created_at: string;
  updated_at: string;
};
