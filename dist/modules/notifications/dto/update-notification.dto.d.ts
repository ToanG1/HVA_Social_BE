import { CreateNotificationDto } from './create-notification.dto';
declare const UpdateNotificationDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNotificationDto>>;
export declare class UpdateNotificationDto extends UpdateNotificationDto_base {
    like: boolean;
    share: boolean;
}
export {};
