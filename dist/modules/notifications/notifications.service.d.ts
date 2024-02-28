import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { CreateNotificationTokenDto } from './dto/create-notification-token.dto';
export declare class NotificationsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    sendNotification(createNotificationDto: CreateNotificationDto): Promise<void>;
    createNotificationToken(userId: string, createNotificationToken: CreateNotificationTokenDto): Promise<void>;
}
