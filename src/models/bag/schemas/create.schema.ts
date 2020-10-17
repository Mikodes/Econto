import { object } from '@hapi/joi';
import { BaseBagSchema } from './base.schema';

export const CreateBagSchema = object({ ...BaseBagSchema });