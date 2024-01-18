import { CreateUserDto } from './createUser.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    isActivated: boolean;
    avatar: string;
    about: string;
    socialLink: string;
}
export {};
