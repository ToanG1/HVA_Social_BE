import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatsService {
  // async createUser(userDto: CreateUserDto) {
  //   const foundUser = await this.prismaService.user.findUnique({
  //     where: {
  //       email: userDto.email,
  //     },
  //   });
  //   if (foundUser) {
  //     throw new HttpException(
  //       'user with this email already exists',
  //       HttpStatus.NOT_ACCEPTABLE,
  //     );
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const hashedPassword = await bcrypt.hash(userDto.password, Rounds);
  //   userDto.password = hashedPassword;
  //   const createdUser = await this.prismaService.user.create({
  //     data: userDto,
  //   });
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { password, ...result } = createdUser;
  //   return result;
  // }

  async create(createChatDto: CreateChatDto) {
    //   const foundUser = await this..findUnique({
    //         where: {
    //         //  email: userDto.email,
    //         },
    //       });
    // }
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
