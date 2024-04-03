import { PrismaService } from '../prisma/prisma.service';
export declare class FollowService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(followerId: string, followedId: string): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAllOfUser(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        follower: {
            userInfo: {
                avatar: string;
            };
            name: string;
            id: string;
        };
        followed: {
            userInfo: {
                avatar: string;
            };
            name: string;
            id: string;
        };
    }[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
