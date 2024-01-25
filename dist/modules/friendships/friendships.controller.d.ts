import { FriendshipsService } from './friendships.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
export declare class FriendshipsController {
    private readonly friendshipsService;
    constructor(friendshipsService: FriendshipsService);
    create(createFriendshipDto: CreateFriendshipDto): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    search(id: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    findAll(): string;
    findOne(id: string): void;
    update(id: string, updateFriendshipDto: UpdateFriendshipDto): string;
    remove(id: string): Promise<string>;
}
