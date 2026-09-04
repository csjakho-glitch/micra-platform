import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AssessmentsPage() {
  const supabase = await createClient();
  const { data: surveys, error } = await supabase.from('survey_records').select('id,farm_id,evidence_id,survey_timestamp,status,confidence,gps_accuracy_m').order('survey_timestamp',{ascending:false}).limit(50);
  return <div className="simplePage"><div className="pageTitle"><div><div className="kicker">WP-01 · CSE FIELD SURVEY</div><h1>Assessments</h1><p>Raw → validated → verified → baseline workflow.</p></div><Link className="primary" href="/">Back to control center</Link></div>{error ? <div className="panel">Unable to load assessments: {error.message}</div> : <div className="farmTable"><div className="tableHead"><span>RECORD</span><span>FARM</span><span>DATE</span><span>STATUS</span><span>CONFIDENCE</span><span>GPS</span></div>{surveys?.map(s=><div className="tableRow" key={s.id}><span className="farmName"><strong>{s.evidence_id || 'Survey record'}</strong><small>{s.id.slice(0,8)}</small></span><span>{s.farm_id}</span><span>{new Date(s.survey_timestamp).toLocaleString('en-ID')}</span><span>{s.status}</span><span>{s.confidence}</span><span>{s.gps_accuracy_m ? `${s.gps_accuracy_m} m` : '—'}</span></div>)}{!surveys?.length && <div className="empty">No survey records are available to this account.</div>}</div>}</div>;
}
