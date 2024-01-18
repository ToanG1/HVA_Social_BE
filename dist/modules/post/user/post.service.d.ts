import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
export declare class PostService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPostDto: CreatePostDto, userId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): Promise<string>;
    remove(id: number): string;
}
