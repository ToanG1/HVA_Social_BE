import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDto } from './create-chat.dto';
import { IsBoolean } from 'class-validator';

export class UpdateChatDto extends PartialType(CreateChatDto) {
  @IsBoolean()
  statusMessage: boolean;
}
