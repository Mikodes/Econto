import { assignObject } from "../../../common/helpers/assign-object";
import { Jacket } from "../entities/jacket.entity";
import { BaseJacketDto } from "./base.dto";

export class JacketResponse extends BaseJacketDto implements Readonly<JacketResponse> {
    id: string;
    
    public static fromObject(object: Partial<JacketResponse>): JacketResponse {
        const jacketResponse = new JacketResponse();

        assignObject<JacketResponse>(jacketResponse, object, FIELDS);

        return jacketResponse;
    }

    public toEntity(): Jacket {
        const entity = new Jacket();

        assignObject<Jacket>(entity, this, FIELDS);

        return entity;
    }
}

const FIELDS: string[] = ['id', 'name', 'price', 'brand', 'style', 'color'];