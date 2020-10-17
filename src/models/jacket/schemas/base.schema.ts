import { string, number } from '@hapi/joi';
import { Color, Style } from '../../../common/constants';

export const BaseJacketSchema = {
    name: string().min(1).max(32).required(),
    price: number().min(0).max(9999).required(),
    brand: string().min(1).max(32).required(),
    style: string().valid(Style.BOMBER, Style.FLEECE, Style.FULL_ZIP, Style.HOODIES, Style.RAIN, Style.TRACK, Style.WINDBREAKERS, Style.WINTER).required(),
    color: string().valid(Color.BLACK, Color.BLUE, Color.GRAY, Color.GREEN, Color.RED, Color.WHITE).required()
};