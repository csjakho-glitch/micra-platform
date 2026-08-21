import type { Farm, UUID } from '@micra/domain-types';

export interface FarmRepository {
  create(input: Omit<Farm, 'id' | 'createdAt' | 'updatedAt'>): Promise<Farm>;
  findById(tenantId: UUID, farmId: UUID): Promise<Farm | null>;
}

export class InMemoryFarmRepository implements FarmRepository {
  private readonly farms = new Map<UUID, Farm>();

  async create(input: Omit<Farm, 'id' | 'createdAt' | 'updatedAt'>): Promise<Farm> {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const farm: Farm = { ...input, id, createdAt: now, updatedAt: now };
    this.farms.set(id, farm);
    return farm;
  }

  async findById(tenantId: UUID, farmId: UUID): Promise<Farm | null> {
    const farm = this.farms.get(farmId);
    return farm && farm.tenantId === tenantId ? farm : null;
  }
}
