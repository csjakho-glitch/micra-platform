import { Controller, Get, Module, Req } from '@nestjs/common';
import { FarmModule } from './modules/farm/farm.module';

type RequestWithHeaders = {
  headers: Record<string, string | string[] | undefined>;
};

@Controller('health')
class HealthController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'micra-api',
      version: '0.1.0',
      runtime: 'typescript-nestjs',
    } as const;
  }

  @Get('tenant-context')
  getTenantContext(@Req() request: RequestWithHeaders) {
    const tenantHeader = request.headers['x-tenant-id'];
    return {
      tenantId: Array.isArray(tenantHeader) ? tenantHeader[0] ?? null : tenantHeader ?? null,
      authenticated: false,
    } as const;
  }
}

@Module({
  imports: [FarmModule],
  controllers: [HealthController],
})
export class AppModule {}
