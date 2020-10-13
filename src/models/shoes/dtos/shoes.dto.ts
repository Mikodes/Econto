import { IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { assignObject } from "../../../common/utils";
import { Color, Gender } from "../../../common/constants";
import { Shoes } from "../entities/shoes.entity";

export class ShoesResponse implements Readonly<ShoesResponse> {
    @IsUUID()
    id: string;

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
    
    public static fromObject(object: Partial<ShoesResponse>): ShoesResponse {
        const shoesResponse = new ShoesResponse();

        assignObject<ShoesResponse>(shoesResponse, object, _fields);

        return shoesResponse;
    }

    public toEntity(): Shoes {
        const entity = new Shoes();

        assignObject<Shoes>(entity, this, _fields);

        return entity;
    }
}

const _fields: string[] = ['id', 'name', 'price', 'brand', 'size', 'color', 'gender'];