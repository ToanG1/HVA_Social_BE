import { CreateUserDto } from 'src/modules/user/userDTO/createUser.dto';
import { AuthService } from './auth.service';
import { LoginDto } from '../authDTO/login.dto';
import { UserService } from '../../user/user/user.service';
import { NotificationsService } from 'src/modules/notifications/notifications.service';
export declare class AuthController {
    private authService;
    private userService;
    private notificationService;
    constructor(authService: AuthService, userService: UserService, notificationService: NotificationsService);
    signUp(signUpDto: CreateUserDto): Promise<{
        access_token: string;
        refersh_token: string;
        user_info: {
            userId: string;
            name: string;
        };
    }>;
    activate(activationToken: string): Promise<boolean>;
    login(signInDto: LoginDto): Promise<{
        access_token: string;
        refersh_token: string;
        user_info: {
            userId: string;
            name: string;
            avatar: string;
        };
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
    }>;
    logout(req: any): Promise<boolean>;
    pwdReset(email: string): Promise<void>;
    CheckPwdResetCode(email: string, code: number): Promise<`${string}-${string}-${string}-${string}-${string}`>;
    resetPassword(token: string, pwd: string): Promise<void>;
    checkUrlToken(token: string): Promise<boolean>;
    authenticate(): boolean;
    changePassword(pwd: string, req: any): Promise<`${string}-${string}-${string}-${string}-${string}`>;
}
