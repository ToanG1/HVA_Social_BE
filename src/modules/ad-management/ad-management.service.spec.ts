import { Test, TestingModule } from '@nestjs/testing';
import { AdManagementService } from './ad-management.service';

describe('AdManagementService', () => {
  let service: AdManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdManagementService],
    }).compile();

    service = module.get<AdManagementService>(AdManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
