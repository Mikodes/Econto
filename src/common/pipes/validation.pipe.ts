import { ObjectSchema, ValidationResult } from "@hapi/joi";
import { Injectable, PipeTransform } from "@nestjs/common";
import { InputNotValidException } from "../exceptions/input-not-valid.exception";

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private readonly _schema: ObjectSchema) {}

    transform(value: any) {
        const result: ValidationResult = this._schema.validate(value);
        if(result.error) throw new InputNotValidException(result.error.message);

        return value;
    }
}