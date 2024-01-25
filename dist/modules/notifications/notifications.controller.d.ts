import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNotificationDto: UpdateNotificationDto): string;
    updateLikePost(id: string, updateNotificationDto: UpdateNotificationDto): string;
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
