import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';

import { UserService } from './user/user.service';
import { PrismaModule } from '../prisma/prisma.module';

import { MailSenderService } from '../mail-sender/mail-sender.service';
import { UserAdminController } from './admin/user-admin.controller';
import { UserAdminService } from './admin/user-admin.service';

@Module({
  controllers: [UserController, UserAdminController],
  providers: [UserService, UserAdminService, MailSenderService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
