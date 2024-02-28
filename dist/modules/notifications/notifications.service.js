"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const admin = require("firebase-admin");
let NotificationsService = class NotificationsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async sendNotification(createNotificationDto) {
        const notification_token = await this.prismaService.notificationToken.findUnique({
            where: {
                userId_device_type: {
                    userId: createNotificationDto.userId,
                    device_type: createNotificationDto.device_type,
                },
            },
            select: {
                id: true,
                token: true,
            },
        });
        this.prismaService.notifications.create({
            data: {
                noti_token_id: notification_token.id,
                title: createNotificationDto.title,
                body: createNotificationDto.body,
                createdAt: new Date(),
            },
        });
        admin
            .messaging()
            .send({
            notification: {
                title: createNotificationDto.title,
                body: createNotificationDto.body,
            },
            token: notification_token.token,
            android: { priority: 'high' },
        })
            .then((res) => {
            console.log('finish', res);
        })
            .catch((error) => {
            console.error(error);
        });
    }
    async createNotificationToken(userId, createNotificationToken) {
        const notiToken = await this.prismaService.notificationToken.findUnique({
            where: {
                userId_device_type: {
                    userId: userId,
                    device_type: createNotificationToken.device_type,
                },
            },
        });
        if (notiToken === null) {
            const token = await this.prismaService.notificationToken.create({
                data: {
                    userId: userId,
                    token: createNotificationToken.fcmToken,
                    device_type: createNotificationToken.device_type,
                    createdAt: new Date(),
                },
            });
            console.log(token);
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map