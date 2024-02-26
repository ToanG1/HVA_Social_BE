import { Body, Injectable, Param } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPostDto: CreatePostDto, userId: string) {
    const post = this.prismaService.post.create({
      data: {
        content: createPostDto.content,
        userId: userId,
        videos: createPostDto.video,
        images: createPostDto.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return post;
  }
  async getPost(userId: string) {
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
  async updatePost(id: string, updatePost: UpdatePostDto) {
    const foundUser = await this.findUserById(id);
  }
  async findUserById(id: string): Promise<Post | null | undefined> {
    return await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
  }

  findAll() {
    return this.prismaService.post.findMany({
      where: {
        isActivated: true,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const q = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
      include: {
        user: {
          select: {
            name: true,
            id: true,
          },
        },
        comments: true,
      },
    });
    return q;
  }
  async get(userId: string) {
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

  async update(id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = this.prismaService.post.update({
      where: {
        id: id,
      },
      data: {
        content: updatePostDto.content || undefined,
        userId: id,
        videos: updatePostDto.video,
        images: updatePostDto.image,
        updatedAt: new Date(),
      },
    });
    return post;
    //return `This action updates a #${id} post`;
  }

  async remove(Id: string) {
    const deleteReplies = this.prismaService.postComment.deleteMany({
      where: {
        id: String(Id),
      },
    });
    const deletePost = this.prismaService.post.delete({
      where: {
        id: String(Id),
      },
    });
    await this.prismaService.$transaction([deleteReplies, deletePost]);
    return 'success';
  }
  search(searchString: string) {
    return this.prismaService.post.findMany({
      where: {
        content: {
          contains: searchString,
        },
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
