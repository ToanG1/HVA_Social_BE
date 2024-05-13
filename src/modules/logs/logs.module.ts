import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user/user.service';

@Module({
  providers: [LogsService, PrismaService, UserService],
})
export class LogsModule {}
