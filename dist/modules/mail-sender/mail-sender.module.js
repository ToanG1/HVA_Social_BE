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
exports.MailSenderModule = void 0;
const common_1 = require("@nestjs/common");
const mail_sender_service_1 = require("./mail-sender.service");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
let MailSenderModule = class MailSenderModule {
    constructor() {
        new handlebars_adapter_1.HandlebarsAdapter(undefined, {
            inlineCssEnabled: true,
            inlineCssOptions: {
                url: ' ',
                preserveMediaQueries: true,
            },
        });
    }
};
exports.MailSenderModule = MailSenderModule;
exports.MailSenderModule = MailSenderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.EMAIL_HOST,
                    port: process.env.EMAIL_PORT,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_HOST_USER,
                        pass: process.env.EMAIL_HOST_PWD,
                    },
                },
                defaults: {
                    from: `"nest-modules" <${process.env.EMAIL_DEFAULT_FROM}>`,
                },
                template: {
                    dir: process.cwd() + '/templates/',
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        providers: [mail_sender_service_1.MailSenderService],
    }),
    __metadata("design:paramtypes", [])
], MailSenderModule);
//# sourceMappingURL=mail-sender.module.js.map