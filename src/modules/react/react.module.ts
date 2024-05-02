import { Module } from '@nestjs/common';
import { ReactService } from './react.service';
import { ReactController } from './react.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReactController],
  providers: [ReactService, PrismaService],
})
export class ReactModule {}
