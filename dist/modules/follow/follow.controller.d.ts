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
}
