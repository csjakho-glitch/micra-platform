import { describe, expect, it } from 'vitest';
import { FarmService } from './farm.service';

const TENANT_A = '00000000-0000-0000-0000-00000000000a';
const TENANT_B = '00000000-0000-0000-0000-00000000000b';

describe('FarmService', () => {
  it('creates a farm in the supplied tenant', async () => {
    const service = new FarmService();
    const farm = await service.create({ tenantId: TENANT_A, name: 'Demo Farm', areaHa: 0.5 });

    expect(farm.tenantId).toBe(TENANT_A);
    expect(farm.name).toBe('Demo Farm');
    expect(farm.status).toBe('ACTIVE');
  });

  it('does not return a farm across tenant boundaries', async () => {
    const service = new FarmService();
    const farm = await service.create({ tenantId: TENANT_A, name: 'Tenant A Farm' });

    await expect(service.get(TENANT_A, farm.id)).resolves.toMatchObject({ id: farm.id });
    await expect(service.get(TENANT_B, farm.id)).resolves.toBeNull();
  });
});
