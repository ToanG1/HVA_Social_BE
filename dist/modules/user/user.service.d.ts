import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../user/userDTO/createUser.dto';
import { UpdateUserDto } from '../user/userDTO/updateUser.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(userDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUser(userId: string): Promise<{
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
    }>;
    updateUser(userId: string, updateUser: UpdateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUserById(userID: string): Promise<User | null | undefined>;
    throwNotFoundIfUserNotProvided(user: User): Promise<void>;
    findOneByEmail(email: string): Promise<{
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changePassword(token: string, newPassword: string): Promise<void>;
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
