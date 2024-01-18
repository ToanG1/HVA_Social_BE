import { UserAdminService } from './user.admin.service';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
import { MailSenderService } from 'src/modules/mail-sender/mail-sender.service';
export declare class UserAdminController {
    private readonly userService;
    private readonly userAdminService;
    private readonly mailSenderService;
    constructor(userService: UserAdminService, userAdminService: UserAdminService, mailSenderService: MailSenderService);
    findAll(): Promise<any>;
    getChartData(): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    ban(id: string): Promise<any>;
}
