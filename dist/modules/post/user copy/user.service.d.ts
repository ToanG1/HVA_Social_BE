import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../user/userDTO/createUser.dto';
import { UpdateUserDto } from '../user/userDTO/updateUser.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllUsers(): Promise<any>;
    createUser(userDto: CreateUserDto): Promise<any>;
    getUser(userId: string): Promise<any>;
    updateUser(userId: string, updateUser: UpdateUserDto): Promise<any>;
    deleteUser(userId: string): Promise<any>;
    findUserById(userID: string): Promise<User | null | undefined>;
    throwNotFoundIfUserNotProvided(user: User): Promise<void>;
    findOneByEmail(email: string): Promise<any>;
    changePassword(token: string, newPassword: string): Promise<void>;
    findAll(): Promise<any>;
}
