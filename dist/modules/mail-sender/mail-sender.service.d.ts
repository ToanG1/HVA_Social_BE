import { MailerService } from '@nestjs-modules/mailer';
export declare class MailSenderService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendResetPasswordSecret(email: string, secret: number): void;
    sendActiationEmail(email: string, code: string): void;
    sendNotificationEmail(email: string, subject: any, title: any, content: any): void;
}
