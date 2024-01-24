"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const response_formatting_interceptor_1 = require("./interceptors/response-formatting.interceptor");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: true,
        whitelist: true,
    }));
    app.useGlobalInterceptors(new response_formatting_interceptor_1.ResponseFormattingInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Hoc Voi Ai API')
        .setDescription('The Hoc Voi Ai API description')
        .setVersion('1.0')
        .addTag('hocvoiai')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:5002',
        ],
    });
    app.use((0, express_1.json)({ limit: '5mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '5mb' }));
    await app.listen(process.env.PORT || 5001);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map