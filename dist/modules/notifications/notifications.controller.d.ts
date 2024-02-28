import { NotificationsService } from './notifications.service';
import { CreateNotificationTokenDto } from './dto/create-notification-token.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    createNotificationToken(req: any, createNotificationToken: CreateNotificationTokenDto): void;
}
