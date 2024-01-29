import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as admin from 'firebase-admin';
import { randomUUID } from 'crypto';

import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}
  async sendNotification(createNotificationDto: CreateNotificationDto) {
    const notification_token =
      await this.prismaService.notificationToken.upsert({
        where: {
          userId: createNotificationDto.userId,
        },
        create: {
          userId: createNotificationDto.userId,
          token: randomUUID(),
          device_type: 'default',
          createdAt: new Date(),
        },
        update: {},
      });

    const createNotification = await this.prismaService.notifications.create({
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
          title: createNotification.title,
          body: createNotification.body,
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
}
