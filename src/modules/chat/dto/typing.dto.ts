import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TypingDto {
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @IsBoolean()
  @IsNotEmpty()
  isTyping: boolean;
}
