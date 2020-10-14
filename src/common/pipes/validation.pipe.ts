import { ObjectSchema, ValidationResult } from "@hapi/joi";
import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private readonly _schema: ObjectSchema) {}

    transform(value: any) {
        const result: ValidationResult = this._schema.validate(value);
        console.log(result.error.message);

        return value;
    }
}