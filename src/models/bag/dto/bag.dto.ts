import { assignObject } from "../../../common/helpers/assign-object";
import { Bag } from "../entities/bag.entity";
import { BaseBagDto } from "./base.dto";

export class BagResponse extends BaseBagDto implements Readonly<BagResponse> {
    id: string;
    
    public static fromObject(object: Partial<BagResponse>): BagResponse {
        const bagResponse = new BagResponse();

        assignObject<BagResponse>(bagResponse, object, FIELDS);

        return bagResponse;
    }

    public toEntity(): Bag {
        const entity = new Bag();

        assignObject<Bag>(entity, this, FIELDS);

        return entity;
    }
}

const FIELDS: string[] = ['id', 'name', 'price', 'brand', 'color'];