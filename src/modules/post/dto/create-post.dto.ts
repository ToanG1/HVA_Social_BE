import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'content post',
    example: 'content post',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'link image of post',
    example: 'link image of post',
    required: true,
  })
  @IsOptional()
  images: string[];

  @ApiProperty({
    description: 'link video of post',
    example: 'link video of post',
    required: true,
  })
  @IsOptional()
  videos: string[];
}
