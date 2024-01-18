"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSenderService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailSenderService = class MailSenderService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendResetPasswordSecret(email, secret) {
        this.mailerService
            .sendMail({
            to: email,
            from: 'toandinh01675@gmail.com',
            subject: 'THIS IS YOUR SECRET CODE FROM HOC VOI AI',
            template: 'reset-code',
            context: {
                secret: secret,
            },
        })
            .catch((err) => {
            console.log(err);
        });
    }
    sendActiationEmail(email, code) {
        this.mailerService
            .sendMail({
            to: email,
            from: 'toandinh01675@gmail.com',
            subject: 'THIS IS YOUR ACTIVATION EMAIL FROM HOC VOI AI',
            template: 'activation-code',
            context: {
                code: code,
            },
        })
            .catch((err) => {
            console.log(err);
        });
    }
    sendNotificationEmail(email, subject, title, content) {
        this.mailerService
            .sendMail({
            to: email,
            from: 'toandinh01675@gmail.com',
            subject: subject,
            template: 'notification-from-admin',
            context: {
                title: title,
                content: content,
            },
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
exports.MailSenderService = MailSenderService;
exports.MailSenderService = MailSenderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailSenderService);
//# sourceMappingURL=mail-sender.service.js.map