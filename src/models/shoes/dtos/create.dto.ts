import { IsEnum, IsNumber, IsString } from "class-validator";
import { Color, Gender } from "src/models/constants";

export class CreateShoesDto implements Readonly<CreateShoesDto> {
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    brand: string;

    @IsNumber()
    size: number;

    @IsEnum(Color)
    color: Color;

    @IsEnum(Gender)
    gender: Gender;
}