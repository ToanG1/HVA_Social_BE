import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostCommentDto {
  @IsString()
  @IsNotEmpty()
  postId: string;

  @ApiProperty({
    description: 'content of the post comment',
    example: 'hello',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'link image of post',
    example: 'link image of post',
  })
  @IsOptional()
  images: string[];

  @ApiProperty({
    description: 'link video of post',
    example: 'link video of post',
  })
  @IsOptional()
  videos: string[];
}
