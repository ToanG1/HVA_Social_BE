import { HttpException, HttpStatus } from '@nestjs/common';
export class CreateFriendshipDto extends HttpException{
    constructor() {
        super('Friend Not Found', HttpStatus.NOT_FOUND);
      }
}
