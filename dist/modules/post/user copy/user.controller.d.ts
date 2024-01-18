import { UserService } from './user.service';
import { CreateUserDto } from './userDTO/createUser.dto';
import { UpdateUserDto } from './userDTO/updateUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<any>;
    createNewUser(createUserDto: CreateUserDto): Promise<any>;
    getUser(userId: string): Promise<any>;
    updateUser(userId: string, userUpdate: UpdateUserDto): Promise<any>;
    deleteUser(userId: string): Promise<any>;
}
