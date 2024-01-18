import { CreateAdManagementDto } from './dto/create-ad-management.dto';
import { UpdateAdManagementDto } from './dto/update-ad-management.dto';
export declare class AdManagementService {
    create(createAdManagementDto: CreateAdManagementDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAdManagementDto: UpdateAdManagementDto): string;
    remove(id: number): string;
}
