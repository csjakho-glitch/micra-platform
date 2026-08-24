import { Controller, Get, Module, Req } from '@nestjs/common';
import type { IncomingMessage } from 'node:http';
import { FarmModule } from './modules/farm/farm.module';

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
  getTenantContext(@Req() request: IncomingMessage) {
    return {
      tenantId: request.headers['x-tenant-id'] ?? null,
      authenticated: false,
    } as const;
  }
}

@Module({
  imports: [FarmModule],
  controllers: [HealthController],
})
export class AppModule {}
