import { UserService } from './user.service';
import { CreateUserDto } from './userDTO/createUser.dto';
import { UpdateUserDto } from './userDTO/updateUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    searchUsersByName(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: string;
    }[]>;
    createNewUser(createUserDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUser(userId: string): Promise<{
        name: string;
        id: string;
        email: string;
        isAdmin: boolean;
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    updateUser(userId: string, userUpdate: UpdateUserDto): Promise<{
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
}
