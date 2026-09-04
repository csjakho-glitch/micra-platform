import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function EvidencePage(){
 const supabase=await createClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user)redirect('/login');
 const {data:evidence,error}=await supabase.from('evidence_records').select('id,survey_id,evidence_id,evidence_type,domain,parameter,value,unit,confidence,status,observer_id,verified_by,verified_at,created_at').order('created_at',{ascending:false}).limit(100);
 return <div className="simplePage"><div className="pageTitle"><div><div className="kicker">MRV · EVIDENCE</div><h1>Evidence registry</h1><p>Traceable observations supporting WP-01 verification and G-ENV readiness.</p></div><Link className="primary" href="/assessments">Assessments</Link></div>{error?<div className="panel">Unable to load evidence: {error.message}</div>:<div className="farmTable"><div className="tableHead"><span>EVIDENCE</span><span>DOMAIN</span><span>PARAMETER</span><span>VALUE</span><span>STATUS</span><span>CONFIDENCE</span></div>{evidence?.map(e=><div className="tableRow" key={e.id}><span className="farmName"><strong>{e.evidence_id}</strong><small>{e.evidence_type}</small></span><span>{e.domain}</span><span>{e.parameter||'—'}</span><span>{e.value?JSON.stringify(e.value):'—'} {e.unit||''}</span><span>{e.status}</span><span>{e.confidence}</span></div>)}{!evidence?.length&&<div className="empty">No evidence records are available to this account.</div>}</div>}</div>;
}
