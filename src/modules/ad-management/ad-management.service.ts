import { Injectable } from '@nestjs/common';
import { CreateAdManagementDto } from './dto/create-ad-management.dto';
import { UpdateAdManagementDto } from './dto/update-ad-management.dto';

@Injectable()
export class AdManagementService {
  create(createAdManagementDto: CreateAdManagementDto) {
    return 'This action adds a new adManagement';
  }

  findAll() {
    return `This action returns all adManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adManagement`;
  }

  update(id: number, updateAdManagementDto: UpdateAdManagementDto) {
    return `This action updates a #${id} adManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} adManagement`;
  }
}
