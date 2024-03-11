import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatUserDto {
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
