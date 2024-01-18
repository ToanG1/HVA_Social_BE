import { Module } from '@nestjs/common';
import { AdManagementService } from './ad-management.service';
import { AdManagementController } from './ad-management.controller';

@Module({
  controllers: [AdManagementController],
  providers: [AdManagementService],
})
export class AdManagementModule {}
