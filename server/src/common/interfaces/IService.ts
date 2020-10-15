export interface IService<T> {
    getById(id: string): Promise<T | null>;

    getAll(): Promise<T[]>;

    create(entity: T): Promise<T>;

    deleteById(id: string): Promise<void>;

    updateById(id: string, shoes: Partial<T>): Promise<void>;
}