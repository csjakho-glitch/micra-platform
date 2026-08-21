import type { Farm, UUID } from '@micra/domain-types';

export interface CreateFarmRequest {
  tenantId: UUID;
  name: string;
  areaHa?: number;
}

export interface FarmResponse extends Farm {}

export interface HealthResponse {
  status: 'ok';
  service: string;
  version: string;
  runtime: string;
}
