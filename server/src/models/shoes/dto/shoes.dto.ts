import { assignObject } from "../../../common/helpers/assign-object";
import { Color, Gender } from "../../../common/constants";
import { Shoes } from "../entities/shoes.entity";

export class ShoesResponse implements Readonly<ShoesResponse> {
    id: string;

    name: string;

    price: number;

    brand: string;

    size: number;

    color: Color;

    gender: Gender;
    
    public static fromObject(object: Partial<ShoesResponse>): ShoesResponse {
        const shoesResponse = new ShoesResponse();

        assignObject<ShoesResponse>(shoesResponse, object, FIELDS);

        return shoesResponse;
    }

    public toEntity(): Shoes {
        const entity = new Shoes();

        assignObject<Shoes>(entity, this, FIELDS);

        return entity;
    }
}

const FIELDS: string[] = ['id', 'name', 'price', 'brand', 'size', 'color', 'gender'];