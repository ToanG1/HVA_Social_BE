import { FollowService } from './follow.service';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    create(userId: string, req: any): Promise<{
        id: string;
        followerId: string;
        followedId: string;
        createdAt: Date;
    }>;
    findAllCurrentUser(req: any): import(".prisma/client").Prisma.PrismaPromise<{
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
}
