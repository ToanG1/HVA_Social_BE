import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LogsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createLogDto: CreateLogDto, userId: string) {
    const creatLog = this.prismaService.logs.create({
      data: {
        userId: userId,
        level: createLogDto.level,
        request: createLogDto.request,
        ipAddress: createLogDto.ipAddress,
      },
    });
    return creatLog;
  }

  findAll() {
    return `This action returns all logs`;
  }

  findOne(id: string) {
    return `This action returns a #${id} log`;
  }

  update(id: string, updateLogDto: UpdateLogDto) {
    return `This action updates a #${id} log`;
  }

  remove(id: string) {
    return `This action removes a #${id} log`;
  }
}
