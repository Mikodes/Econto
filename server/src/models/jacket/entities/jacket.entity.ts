import { Color, Gender, Style } from "../../../common/constants";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../base.entity";

@Entity({ name: 'jacket' })
export class Jacket extends BaseEntity {
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    brand: string;

    @Column({ type: 'enum', enum: Style })
    style: Style

    @Column({ type: 'enum', enum: Color })
    color: Color;
}