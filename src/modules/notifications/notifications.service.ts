import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }
  updateLike(id: string, updateNotificationDto: UpdateNotificationDto) {
    const updateLike = this.prismaService.notifications.update({
      where: {
        id: id,
      },
      data: {
        like: updateNotificationDto.like,
        createdAt: new Date(),
      },
    });
    return updateLike;
  }
  // updatePostLike(id: string, updateNotificationDto: UpdateNotificationDto) {
  //   const updateChat = this.prismaService.notifications.update({
  //     where: {
  //       id: id,
  //     },
  //     data: {
  //       like: updateNotificationDto.like,
  //       createdAt: new Date(),
  //     },
  //   });
  //   return updateChat;
  // }
  // updatePostCommentLike(
  //   id: string,
  //   updateNotificationDto: UpdateNotificationDto,
  // ) {
  //   const updatePostCommentLike = this.prismaService.notifications.update({
  //     where: {
  //       id: id,
  //     },
  //     data: {
  //       like: updateNotificationDto.like,
  //       createdAt: new Date(),
  //     },
  //   });
  //   return updatePostCommentLike;
  // }
  // updatePostReplyCommentLike(
  //   id: string,
  //   updateNotificationDto: UpdateNotificationDto,
  // ) {
  //   const updatePostCommentLike = this.prismaService.notifications.update({
  //     where: {
  //       id: id,
  //     },
  //     data: {
  //       like: updateNotificationDto.like,
  //       createdAt: new Date(),
  //     },
  //   });
  //   return updatePostCommentLike;
  // }

  remove(id: string, updateNotificationDto: UpdateNotificationDto) {
    const updatePostCommentLike = this.prismaService.notifications.update({
      where: {
        id: id,
      },
      data: {
        like: updateNotificationDto.like,
        createdAt: new Date(),
      },
    });
    return updatePostCommentLike;
  }
}
