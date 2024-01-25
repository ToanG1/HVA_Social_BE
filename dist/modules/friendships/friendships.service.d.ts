import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class FriendshipsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFriendshipDto: CreateFriendshipDto): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    search(searchString: string): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            name: string;
        };
    } & {
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    })[]>;
    remove(id: string): Promise<string>;
    findAll(): string;
    findOne(name: string): void;
    update(id: number, updateFriendshipDto: UpdateFriendshipDto): string;
}
