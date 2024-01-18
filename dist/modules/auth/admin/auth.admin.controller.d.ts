import { LoginDto } from '../authDto/login.dto';
import { AuthService } from '../user/auth.service';
export declare class AuthAdminController {
    private readonly authService;
    constructor(authService: AuthService);
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
    checkAdmin(): Promise<boolean>;
}
