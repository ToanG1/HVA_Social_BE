import { Test, TestingModule } from '@nestjs/testing';
import { AdManagementController } from './ad-management.controller';
import { AdManagementService } from './ad-management.service';

describe('AdManagementController', () => {
  let controller: AdManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdManagementController],
      providers: [AdManagementService],
    }).compile();

    controller = module.get<AdManagementController>(AdManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
