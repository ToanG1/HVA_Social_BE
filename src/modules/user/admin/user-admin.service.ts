import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../userDTO/createUser.dto';
import { UpdateUserDto } from '../userDTO/updateUser.dto';

const Rounds = 10;

@Injectable()
export class UserAdminService {
  constructor(private prismaService: PrismaService) {}
  async createUser(userDto: CreateUserDto) {
    await this.prismaService.user.create({
      data: {
        ...userDto,
        password: await bcrypt.hash('12345678', Rounds),
      },
    });
    return true;
  }

  async updateUser(userId: string, updateUser: UpdateUserDto) {
    const updatedUser = await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        name: updateUser.name || undefined,
        email: updateUser.email || undefined,
        password: updateUser.password || undefined,
        isAdmin: updateUser.isAdmin || undefined,
        isActivated: updateUser.isActivated || undefined,
        updatedAt: new Date(),
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = updatedUser;
    return result;
  }

  async deleteUser(userId: string) {
    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });

    return deletedUser;
  }

  async throwNotFoundIfUserNotProvided(user: User) {
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();

    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    });
  }
}
