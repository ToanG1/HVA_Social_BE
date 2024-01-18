import { AdManagementService } from './ad-management.service';
import { CreateAdManagementDto } from './dto/create-ad-management.dto';
import { UpdateAdManagementDto } from './dto/update-ad-management.dto';
export declare class AdManagementController {
    private readonly adManagementService;
    constructor(adManagementService: AdManagementService);
    create(createAdManagementDto: CreateAdManagementDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdManagementDto: UpdateAdManagementDto): string;
    remove(id: string): string;
}
