import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateFriendshipDto extends HttpException {
  @ApiProperty({
    description: 'user id flower',
    example: 'user id flower',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  followerId: string;
}
