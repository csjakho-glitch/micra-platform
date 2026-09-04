import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function FarmsPage() {
  const supabase = await createClient();
  const { data: farms, error } = await supabase.from('farms').select('*').order('created_at', { ascending: false });
  return <div className="simplePage"><div className="pageTitle"><div><div className="kicker">FARM REGISTRY</div><h1>Farm network</h1><p>Authoritative farm registry from Supabase.</p></div><Link className="primary" href="/assessments">Open assessments</Link></div>{error ? <div className="panel">Unable to load farms: {error.message}</div> : <div className="farmTable"><div className="tableHead"><span>FARM</span><span>LOCATION</span><span>AREA</span><span>STATUS</span><span>BASELINE</span><span>RISK</span></div>{farms?.map(f=><div className="tableRow" key={f.id}><span className="farmName"><strong>{f.name}</strong><small>{f.farm_code}</small></span><span>{f.location || '—'}</span><span>{f.area_ha ?? '—'} ha</span><span>{f.status}</span><span><strong>{f.baseline_score ?? '—'}</strong></span><span><b className="risk">{f.risk_class ?? '—'}</b></span></div>)}{!farms?.length && <div className="empty">No farms are registered yet.</div>}</div>}</div>;
}
