import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import type { CreateFarmRequest } from '@micra/api-contracts';
import { FarmService } from './farm.service';

@Controller('farms')
export class FarmController {
  private readonly service = new FarmService();

  @Post()
  create(@Body() body: CreateFarmRequest) {
    return this.service.create(body);
  }

  @Get(':farmId')
  async get(@Headers('x-tenant-id') tenantHeader: string | undefined, @Param('farmId') farmId: string) {
    const tenantId = tenantHeader ?? '';
    const farm = await this.service.get(tenantId, farmId);
    return farm ?? { error: 'NOT_FOUND' };
  }
}
