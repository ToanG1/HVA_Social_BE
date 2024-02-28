import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as admin from 'firebase-admin';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { CreateNotificationTokenDto } from './dto/create-notification-token.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}
  async sendNotification(createNotificationDto: CreateNotificationDto) {
    const notification_token =
      await this.prismaService.notificationToken.findUnique({
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
      .catch((error: any) => {
        console.error(error);
      });
  }

  async createNotificationToken(
    userId: string,
    createNotificationToken: CreateNotificationTokenDto,
  ) {
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
}
