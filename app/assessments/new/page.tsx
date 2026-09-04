import { redirect } from 'next/navigation';
import Link from 'next/link';
import SurveyForm from './survey-form';
import { createClient } from '@/lib/supabase/server';

export default async function NewAssessmentPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  const { data: farms } = await supabase.from('farms').select('id,farm_code,name,cluster_id').order('name');
  return <div className="simplePage"><div className="pageTitle"><div><div className="kicker">WP-01 · CSE FIELD SURVEY</div><h1>New assessment</h1><p>Capture raw field observations with GPS metadata and traceable status.</p></div><Link className="primary" href="/assessments">Assessment queue</Link></div><SurveyForm farms={farms||[]} /></div>;
}
