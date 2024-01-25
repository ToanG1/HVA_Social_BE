import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @ApiProperty({
    description: 'creator chat',
    example: 'creator chat',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  creator: string;

  @ApiProperty({
    description: 'recipient chat',
    example: 'recipient chat',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  recipient: string;

  @ApiProperty({
    description: 'messages chat',
    example: 'messages chat',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  messages: string;
}
