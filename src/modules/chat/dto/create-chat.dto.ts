import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @IsString()
  @IsOptional()
  chatUserId: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
