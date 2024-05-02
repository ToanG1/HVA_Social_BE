import { Body, Injectable, Param } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPostDto: CreatePostDto, userId: string) {
    return await this.prismaService.post.create({
      data: {
        content: createPostDto.content,
        userId: userId,
        videos: createPostDto.videos,
        images: createPostDto.images,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  findByUserId(userId: string) {
    return this.prismaService.post.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
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
            userInfo: {
              select: {
                avatar: true,
              },
            },
          },
        },
        reacts: {
          select: {
            user: {
              select: {
                name: true,
                userInfo: {
                  select: {
                    avatar: true,
                  },
                },
              },
            },
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
        id,
      },
      include: {
        user: {
          select: {
            name: true,
            id: true,
          },
        },
        reacts: {
          select: {
            user: {
              select: {
                name: true,
                userInfo: {
                  select: {
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return q;
  }

  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = this.prismaService.post.update({
      where: {
        id: id,
      },
      data: {
        content: updatePostDto.content || undefined,
        videos: updatePostDto.videos || undefined,
        images: updatePostDto.images || undefined,
        updatedAt: new Date(),
      },
    });
    return post;
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
          mode: 'insensitive',
        },
      },
      include: {
        user: {
          select: {
            name: true,
            userInfo: {
              select: {
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  async savePost(postId: string, userId: string) {
    const existed = await this.prismaService.postSaved.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });
    if (existed) {
      await this.prismaService.postSaved.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
    } else {
      await this.prismaService.postSaved.create({
        data: {
          postId,
          userId,
        },
      });
    }
  }

  getPostSaved(userId: string) {
    return this.prismaService.postSaved.findMany({
      where: {
        userId,
      },
      include: {
        post: true,
      },
    });
  }
}
