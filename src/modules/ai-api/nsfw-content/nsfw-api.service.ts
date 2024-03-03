import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { AI_URL } from '../ai-url.constant';
import { PrismaService } from 'src/modules/prisma/prisma.service';

import { CheckNSFWDto } from '../dto/check-nsfw.dto';
import { FunctionCode } from 'src/utils/enums/function-code.enum';
@Injectable()
export class NSFWApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prismaService: PrismaService,
  ) {}

  async checkNSFWContent(checkNSFWDto: CheckNSFWDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${AI_URL}/check-nsfw?type=${checkNSFWDto.type}&priority=${checkNSFWDto.priority}`,
      { content: checkNSFWDto.content },
    );
    if (data.isViolated)
      await this.prismaService.violationSC.create({
        data: {
          userId: checkNSFWDto.userId,
          functionCode: FunctionCode[checkNSFWDto.functionCode],
          idObject: checkNSFWDto.idObject,
          reason: JSON.stringify(data.reason),
        },
      });
    return {
      isBanned: data.isBanned,
      reproducedContent: data.reproducedContent,
    };
  }
}
