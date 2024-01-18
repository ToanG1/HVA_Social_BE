import { CreateUserDto } from 'src/modules/user/userDTO/createUser.dto';
import { AuthService } from './auth.service';
import { LoginDto } from '../authDto/login.dto';
import { UserService } from '../../user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
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
