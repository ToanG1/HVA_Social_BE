import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatUserDto {
  @IsString()
  @IsNotEmpty()
  chatRoomId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  constructor(chatRoomId: string, userId: string) {
    this.chatRoomId = chatRoomId;
    this.userId = userId;
  }
}
