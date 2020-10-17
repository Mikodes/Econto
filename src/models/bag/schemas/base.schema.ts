import { string, number } from '@hapi/joi';
import { Color, Style } from '../../../common/constants';

export const BaseBagSchema = {
    name: string().min(1).max(32).required(),
    price: number().min(0).max(9999).required(),
    brand: string().min(1).max(32).required(),
    color: string().valid(Color.BLACK, Color.BLUE, Color.GRAY, Color.GREEN, Color.RED, Color.WHITE).required()
};