import { Color, Gender } from "../../../common/constants";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IShoes } from "../interfaces/shoes.interface";

@Entity({ name: 'shoes' })
export class Shoes implements IShoes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    brand: string;

    @Column()
    size: number;

    @Column({ type: 'enum', enum: Color })
    color: Color;

    @Column({ type: 'enum', enum: Gender })
    gender: Gender;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}