import { redirect } from 'next/navigation';
import Dashboard from './dashboard';
import { createClient } from '@/lib/supabase/server';
import type { Farm, SurveyRecord, Profile } from '@/lib/micra/types';

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  const [{ data: profile }, { data: farms }, { data: surveys }] = await Promise.all([
    supabase.from('profiles').select('id,full_name,role,active').eq('id', user.id).maybeSingle(),
    supabase.from('farms').select('*').order('created_at', { ascending: false }),
    supabase.from('survey_records').select('*').order('survey_timestamp', { ascending: false }).limit(100),
  ]);
  return <Dashboard farms={(farms||[]) as Farm[]} surveys={(surveys||[]) as SurveyRecord[]} profile={(profile||null) as Profile|null} />;
}
