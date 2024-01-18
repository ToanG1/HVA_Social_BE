import { UserAdminService } from './user.admin.service';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
import { MailSenderService } from 'src/modules/mail-sender/mail-sender.service';
export declare class UserAdminController {
    private readonly userService;
    private readonly userAdminService;
    private readonly mailSenderService;
    constructor(userService: UserAdminService, userAdminService: UserAdminService, mailSenderService: MailSenderService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getChartData(): Promise<{
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ban(id: string): Promise<{
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
