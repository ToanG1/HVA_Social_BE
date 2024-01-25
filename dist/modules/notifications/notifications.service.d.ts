import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createNotificationDto: CreateNotificationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNotificationDto: UpdateNotificationDto): string;
    updateLike(id: string, updateNotificationDto: UpdateNotificationDto): import(".prisma/client").Prisma.Prisma__NotificationsClient<{
        id: string;
        like: boolean;
        share: boolean;
        userId: string;
        postId: string;
        commentPostId: string;
        replycomentId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string, updateNotificationDto: UpdateNotificationDto): import(".prisma/client").Prisma.Prisma__NotificationsClient<{
        id: string;
        like: boolean;
        share: boolean;
        userId: string;
        postId: string;
        commentPostId: string;
        replycomentId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
