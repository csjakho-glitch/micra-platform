import type { Farm, UUID } from '@micra/domain-types';
import { InMemoryFarmRepository } from './farm.repository';

export interface CreateFarmInput {
  tenantId: UUID;
  name: string;
  areaHa?: number;
}

export class FarmService {
  constructor(private readonly repository = new InMemoryFarmRepository()) {}

  create(input: CreateFarmInput): Promise<Farm> {
    if (!input.tenantId) throw new Error('tenantId is required');
    if (!input.name.trim()) throw new Error('farm name is required');
    if (input.areaHa !== undefined && input.areaHa <= 0) {
      throw new Error('areaHa must be greater than zero');
    }

    return this.repository.create({
      tenantId: input.tenantId,
      name: input.name.trim(),
      areaHa: input.areaHa,
      status: 'ACTIVE',
    });
  }

  get(tenantId: UUID, farmId: UUID): Promise<Farm | null> {
    return this.repository.findById(tenantId, farmId);
  }
}
