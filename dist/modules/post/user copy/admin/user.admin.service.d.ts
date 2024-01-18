import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
export declare class UserAdminService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<any>;
    findAllByAdmin(): any;
    updateUser(userId: string, updateUser: UpdateUserDto): Promise<any>;
    ban(uuid: string): Promise<any>;
    findOneByAdmin(uuid: string): any;
}
