// model Chats {
//     id                      String   @id @default(auto()) @map("_id") @db.ObjectId
//     userId                  String
//     creator                 String
//     recipient               String
//     messages                String
//     createdAt               DateTime @default(now())
//     //lastMessageSent DateTime @updatedAt
//     lastMessageSentUpdateAt DateTime @updatedAt
//     user                    User     @relation(fields: [userId], references: [id])
//   }
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
  messages : string;

}
