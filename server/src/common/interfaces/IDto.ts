export interface IDto<T> {
    fromObject(object: Partial<this>): this;

    toEntity(): T;
}