import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostCommentDto {
  userId: string;

  @ApiProperty({
    description: 'content (in html) of the post commet',
    example: '<h1>hello</h1>',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'post id',
    example: 1,
    type: Number,
  })
  @IsString()
  @IsNotEmpty()
  postId: string;
  @ApiProperty({
    description: 'link image of post',
    example: 'link image of post',
    required: true,
    type: String,
  })
  image: string[];

  @ApiProperty({
    description: 'link video of post',
    example: 'link video of post',
    required: true,
    type: String,
  })
  video: string[];
}
