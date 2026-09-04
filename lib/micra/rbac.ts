import type { MicraRole } from './types';

export const ROLE_PERMISSIONS = {
  surveyor: ['farm:read', 'farm:create', 'assessment:read', 'assessment:create', 'evidence:create'],
  verifier: ['farm:read', 'farm:create', 'farm:update', 'assessment:read', 'assessment:verify', 'evidence:read', 'evidence:verify'],
  admin: ['farm:read', 'farm:create', 'farm:update', 'assessment:read', 'assessment:verify', 'evidence:read', 'evidence:verify', 'identity:manage'],
} as const satisfies Record<MicraRole, readonly string[]>;

export type Permission = (typeof ROLE_PERMISSIONS)[MicraRole][number];
export function can(role: MicraRole, permission: Permission): boolean {
  return (ROLE_PERMISSIONS[role] as readonly string[]).includes(permission);
}
export function assertCan(role: MicraRole, permission: Permission): void {
  if (!can(role, permission)) throw new Error(`MICRA RBAC denied: ${role} cannot ${permission}`);
}
