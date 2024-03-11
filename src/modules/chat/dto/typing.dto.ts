import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TypingDto {
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsBoolean()
  @IsNotEmpty()
  isTyping: boolean;
}
