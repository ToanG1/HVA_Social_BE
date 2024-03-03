import { FunctionCode } from 'src/utils/enums/function-code.enum';
export declare class CheckNSFWDto {
    userId: string;
    functionCode: FunctionCode;
    idObject: string;
    content: string;
    type: string;
    priority: string;
}
