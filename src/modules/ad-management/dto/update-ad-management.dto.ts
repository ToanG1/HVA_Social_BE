import { PartialType } from '@nestjs/mapped-types';
import { CreateAdManagementDto } from './create-ad-management.dto';

export class UpdateAdManagementDto extends PartialType(CreateAdManagementDto) {}
