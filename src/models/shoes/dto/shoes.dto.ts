import { assignObject } from "../../../common/helpers/assign-object";
import { Shoes } from "../entities/shoes.entity";
import { BaseShoesDto } from "./base.dto";

export class ShoesResponse extends BaseShoesDto implements Readonly<ShoesResponse> {
    id: string;
    
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