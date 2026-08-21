export type UUID = string;

export interface TenantRef {
  tenantId: UUID;
}

export interface Farm {
  id: UUID;
  tenantId: UUID;
  name: string;
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  areaHa?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Pond {
  id: UUID;
  tenantId: UUID;
  farmId: UUID;
  name: string;
  areaHa?: number;
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  createdAt: string;
  updatedAt: string;
}

export interface FarmBaseline {
  id: UUID;
  tenantId: UUID;
  farmId: UUID;
  assessmentVersion: string;
  evidenceState: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  capturedAt: string;
}
