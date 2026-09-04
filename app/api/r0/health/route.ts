import { NextResponse } from 'next/server';
import { getR0Session } from '@/lib/supabase/server';
import { assertActiveProfile, R0_IDENTITY_CONTRACT } from '@/lib/micra/r0';

export async function GET() {
  const { user, profile } = await getR0Session();
  if (!user) return NextResponse.json({ ok: false, code: 'AUTH_REQUIRED', contract: R0_IDENTITY_CONTRACT.version }, { status: 401 });
  try {
    const activeProfile = assertActiveProfile(profile);
    return NextResponse.json({ ok: true, contract: R0_IDENTITY_CONTRACT.version, user_id: user.id, role: activeProfile.role, active: activeProfile.active });
  } catch {
    return NextResponse.json({ ok: false, code: 'IDENTITY_INACTIVE', contract: R0_IDENTITY_CONTRACT.version }, { status: 403 });
  }
}
