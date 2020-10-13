import { IsEnum, IsNumber, IsString } from "class-validator";
import { assignObject } from "src/common/utils";
import { Color, Gender } from "../../../common/constants";
import { Shoes } from "../entities/shoes.entity";

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

    public toEntity(): Shoes {
        const entity = new Shoes();

        assignObject<Shoes>(entity, this, FIELDS);

        return entity;
    }
}

const FIELDS: string[] = ['id', 'name', 'price', 'brand', 'size', 'color', 'gender'];