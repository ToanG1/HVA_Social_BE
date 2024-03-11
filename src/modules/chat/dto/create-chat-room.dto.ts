import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateChatRoomDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsBoolean()
  @IsOptional()
  isPublic: boolean;
}
