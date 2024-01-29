"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationDto = void 0;
class CreateNotificationDto {
    constructor(userId, title, body) {
        this.userId = userId;
        this.title = title;
        this.body = body;
        this.device_type = 'default';
    }
}
exports.CreateNotificationDto = CreateNotificationDto;
//# sourceMappingURL=create-notification.dto.js.map