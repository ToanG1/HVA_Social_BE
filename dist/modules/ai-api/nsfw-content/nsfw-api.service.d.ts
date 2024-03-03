import { HttpService } from '@nestjs/axios';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CheckNSFWDto } from '../dto/check-nsfw.dto';
export declare class NSFWApiService {
    private readonly httpService;
    private readonly prismaService;
    constructor(httpService: HttpService, prismaService: PrismaService);
    checkNSFWContent(checkNSFWDto: CheckNSFWDto): Promise<{
        isBanned: any;
        reproducedContent: any;
    }>;
}
