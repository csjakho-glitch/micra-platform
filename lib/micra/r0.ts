import type { Profile, MicraRole } from './types';

export const R0_IDENTITY_CONTRACT = {
  version: 'R0.1',
  roles: ['surveyor', 'verifier', 'admin'] as const,
  authenticated: true,
  activeProfileRequired: true,
} as const;

export function isMicraRole(value: unknown): value is MicraRole {
  return value === 'surveyor' || value === 'verifier' || value === 'admin';
}

export function assertActiveProfile(profile: Profile | null): Profile {
  if (!profile || !profile.active || !isMicraRole(profile.role)) {
    throw new Error('MICRA R0 identity is not active or has an invalid role');
  }
  return profile;
}
