import { Expose } from "class-transformer";
import { Color, Gender } from "src/models/constants";
import { ModelEntity } from "src/models/model.serializer";
import { IShoes } from "../interfaces/shoes.interface";

export const defaultShoesGroupsForSerializing: string[] = ['shoes.timestamps'];

export const extendedShoesGroupsForSerializing: string[] = [ ...defaultShoesGroupsForSerializing ];

export const allShoesGroupsForSerializing: string[] = [ ...extendedShoesGroupsForSerializing, 'shoes.gender' ]

export class ShoesEntity extends ModelEntity implements IShoes {
    id: string;

    name: string;
    
    price: number;

    brand: string;

    size: number;

    color: Color;

    @Expose({ groups: ['shoes.gender'] })
    gender: Gender;

    @Expose({ groups: ['shoes.timestamps'] })
    createdAt: Date

    @Expose({ groups: ['shoes.timestamps'] })
    updatedAt: Date
}