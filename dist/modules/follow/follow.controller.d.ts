import { FollowService } from './follow.service';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    create(userId: string, req: any): import(".prisma/client").Prisma.Prisma__FollowClient<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAllCurrentUser(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        follower: {
            id: string;
            name: string;
        };
        followed: {
            id: string;
            name: string;
        };
    }[]>;
    findAllOfUser(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        follower: {
            id: string;
            name: string;
        };
        followed: {
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
