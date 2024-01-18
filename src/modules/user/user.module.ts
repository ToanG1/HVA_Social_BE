import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';

import { MailSenderService } from '../mail-sender/mail-sender.service';

@Module({
  controllers: [UserController],
  providers: [UserService, MailSenderService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
