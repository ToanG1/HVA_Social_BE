import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    sendNotification(createNotificationDto: CreateNotificationDto): Promise<void>;
}
