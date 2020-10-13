import { IsEnum, IsNumber, IsString } from "class-validator";
import { Color, Gender } from "../../../common/constants";

export class UpdateShoesRequest implements Readonly<UpdateShoesRequest> {
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