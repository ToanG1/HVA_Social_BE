// model Logs {
//     id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     userId    String
//     timestamp DateTime
//     level     String //'info', 'warning', 'error'
//     ipAddress String
//     request   String

//     user      User     @relation(fields: [userId], references: [id])
//   }

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLogDto {
  @ApiProperty({
    description: 'level',
    example: 'level ',
    required: true,
    type: String,
  })
  @IsString()
  level: string;

  @ApiProperty({
    description: 'ipAddress ',
    example: 'ipAddress ',
    required: true,
    type: String,
  })
  @IsString()
  ipAddress: string;

  @ApiProperty({
    description: 'request ',
    example: 'request ',
    required: true,
    type: String,
  })
  @IsString()
  request: string;
}
