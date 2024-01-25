// model PostReplyComment {
//     id        String        @id @default(auto()) @map("_id") @db.ObjectId
//     content   String
//     image     String
//     video     String
//     userId    String
//     commentId String
//     comments  PostComment[]
//     user      User          @relation(fields: [userId], references: [id])

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

//   }
export class CreatePostReplyCommentDto {
  @ApiProperty({
    description: 'content (in html) of the post reply commet',
    example: '<h1>reply</h1>',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

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
