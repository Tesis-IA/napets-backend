import {IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreatePredictionDto {
    @IsString()
    @IsNotEmpty()
    readonly class_name: string

    @IsInt()
    @IsNotEmpty()
    readonly class_code: number
}