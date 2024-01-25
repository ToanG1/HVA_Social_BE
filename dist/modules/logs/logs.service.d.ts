import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class LogsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createLogDto: CreateLogDto, userId: string): Promise<{
        id: string;
        userId: string;
        timestamp: Date;
        level: string;
        ipAddress: string;
        request: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLogDto: UpdateLogDto): string;
    remove(id: string): string;
}
