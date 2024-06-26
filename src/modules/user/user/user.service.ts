import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../userDTO/createUser.dto';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
import { TokenType } from 'src/utils/enums/token-type.enum';

const Rounds = 10;

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async getAllUsers() {
    return await this.prismaService.user.findMany();
  }

  async createUser(userDto: CreateUserDto) {
    const foundUser = await this.prismaService.user.findUnique({
      where: {
        email: userDto.email,
      },
    });
    if (foundUser) {
      throw new HttpException(
        'user with this email already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const hashedPassword = await bcrypt.hash(userDto.password, Rounds);
    userDto.password = hashedPassword;
    const createdUser = await this.prismaService.user.create({
      data: {
        ...userDto,
        userInfo: {
          create: {
            avatar: '',
            about: '',
          },
        },
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = createdUser;
    return result;
  }

  async getUser(userId: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        userInfo: true,
      },
    });
  }

  async updateUser(userId: string, updateUser: UpdateUserDto) {
    const foundUser = await this.findUserById(userId);
    await this.throwNotFoundIfUserNotProvided(foundUser);
    const updatedUser = await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        name: updateUser.name || undefined,
        email: updateUser.email || undefined,
        password: updateUser.password || undefined,
        isAdmin: updateUser.isAdmin || undefined,
        updatedAt: new Date(),
        userInfo: {
          upsert: {
            where: {
              userId: userId,
            },
            update: {
              avatar: updateUser.avatar || undefined,
              about: updateUser.about,

              updatedAt: new Date(),
            },
            create: {
              avatar: updateUser.avatar || undefined,
              about: updateUser.about,

              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        },
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = updatedUser;
    return result;
  }

  async deleteUser(userId: string) {
    const foundUser = await this.findUserById(userId);
    await this.throwNotFoundIfUserNotProvided(foundUser);
    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });

    return deletedUser;
  }

  async findUserById(userID: string): Promise<User | null | undefined> {
    return await this.prismaService.user.findUnique({
      where: {
        id: userID,
      },
    });
  }

  async throwNotFoundIfUserNotProvided(user: User) {
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }

  async findOneByEmail(email: string) {
    const foundUser = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
      include: {
        userInfo: true,
      },
    });
    if (!foundUser) {
      throw new HttpException(
        'there was no user found with this email',
        HttpStatus.NOT_FOUND,
      );
    }
    return foundUser;
  }

  async changePassword(token: string, newPassword: string) {
    const foundToken = await this.prismaService.token.findUnique({
      where: {
        token_type: {
          token: token,
          type: TokenType[TokenType.URL_TOKEN],
        },
      },
    });

    if (!foundToken) {
      throw new NotFoundException('Your token is wrong');
    } else if (foundToken.expiresAt < new Date()) {
      throw new NotFoundException('Your token is expired');
    }

    const deleteToken = this.prismaService.token.delete({
      where: foundToken,
    });
    const updatePassword = this.prismaService.user.update({
      where: {
        id: foundToken.userId,
      },
      data: {
        password: await bcrypt.hash(newPassword, Rounds),
      },
    });

    this.prismaService.$transaction([deleteToken, updatePassword]);
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();

    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    });
  }

  async searchUsersByName(name: string, userId: string) {
    const users = await this.prismaService.user.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        name: true,
        userInfo: {
          select: {
            avatar: true,
          },
        },
        followed: {
          where: {
            followerId: userId,
          },
          select: {
            followedId: true,
          },
        },
      },
    });
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      avatar: user.userInfo ? user.userInfo.avatar : null,
      isFollowed: user.followed.length > 0 ? true : false,
    }));
  }
}
