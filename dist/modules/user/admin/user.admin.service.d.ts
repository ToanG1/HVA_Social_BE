import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
export declare class UserAdminService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findAllByAdmin(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateUser(userId: string, updateUser: UpdateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ban(uuid: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOneByAdmin(uuid: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
