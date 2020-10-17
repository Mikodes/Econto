import { Color } from "../../../common/constants";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../base.entity";

@Entity({ name: 'bag' })
export class Bag extends BaseEntity {
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    brand: string;

    @Column({ type: 'enum', enum: Color })
    color: Color;
}