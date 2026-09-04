import { redirect } from 'next/navigation';
import Dashboard from './dashboard';
import { getR0Session } from '@/lib/supabase/server';
import { assertActiveProfile } from '@/lib/micra/r0';
import type { Farm, SurveyRecord, Profile } from '@/lib/micra/types';

export default async function Home() {
  const { supabase, user, profile } = await getR0Session();
  if (!user) redirect('/login');
  const activeProfile = assertActiveProfile(profile as Profile | null);
  const [{ data: farms }, { data: surveys }] = await Promise.all([
    supabase.from('farms').select('*').order('created_at', { ascending: false }),
    supabase.from('survey_records').select('*').order('survey_timestamp', { ascending: false }).limit(100),
  ]);
  return <Dashboard farms={(farms || []) as Farm[]} surveys={(surveys || []) as SurveyRecord[]} profile={activeProfile} />;
}
