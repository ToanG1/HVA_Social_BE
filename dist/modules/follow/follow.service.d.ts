import { PrismaService } from '../prisma/prisma.service';
export declare class FollowService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(followerId: string, followedId: string): Promise<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }>;
    findAllOfUser(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        follower: {
            userInfo: {
                avatar: string;
            };
            id: string;
            name: string;
        };
        followed: {
            userInfo: {
                avatar: string;
            };
            id: string;
            name: string;
        };
    }[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
