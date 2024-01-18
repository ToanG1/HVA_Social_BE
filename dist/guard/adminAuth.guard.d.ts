import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/modules/prisma/prisma.service';
export declare class AdminAuthGuard implements CanActivate {
    private jwtService;
    private prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
    private isUserAdmin;
}
