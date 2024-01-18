import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../authDto/login.dto';
import { CreateUserDto } from '../../user/userDTO/createUser.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { MailSenderService } from '../../mail-sender/mail-sender.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private prismaService;
    private mailService;
    constructor(usersService: UserService, jwtService: JwtService, prismaService: PrismaService, mailService: MailSenderService);
    isUserAdmin(email: string): Promise<boolean>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        refersh_token: string;
        user_info: {
            userId: string;
            name: string;
            avatar: string;
        };
    }>;
    signUp(signUpDto: CreateUserDto): Promise<{
        access_token: string;
        refersh_token: string;
        user_info: {
            userId: string;
            name: string;
        };
    }>;
    activate(activationToken: string): Promise<boolean>;
    refresh(refershToken: string): Promise<{
        access_token: string;
    }>;
    getRefreshToken(payload: any): Promise<string>;
    signOut(userId: string): Promise<boolean>;
    handleForgotPasswordCode(email: string): Promise<void>;
    getRndCode(): number;
    checkResetCode(email: string, code: number): Promise<boolean>;
    checkUrlToken(token: string): Promise<boolean>;
    handleResetPasswordUrl(email: string): Promise<`${string}-${string}-${string}-${string}-${string}`>;
    checkPwd(email: string, pwd: string): Promise<`${string}-${string}-${string}-${string}-${string}`>;
}
