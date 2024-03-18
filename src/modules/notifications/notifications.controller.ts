import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationTokenDto } from './dto/create-notification-token.dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('noti')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('create-token')
  @UseGuards(AuthGuard)
  createNotificationToken(
    @Request() req,
    @Body() createNotificationToken: CreateNotificationTokenDto,
  ) {
    this.notificationsService.createNotificationToken(
      req.user.sub,
      createNotificationToken,
    );
  }
}
