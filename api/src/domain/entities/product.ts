export default class Product {
    public id?: number;
    public name: string;
    public value: number;
    public description: string;
    public serialCodes?: number[];

    constructor({ name, value, description, id, serialCodes = [] }: ProductAttributes) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.description = description;
        this.serialCodes = serialCodes;
    }
}

type ProductAttributes = {
    id?: number,
    name: string,
    value: number,
    description: string,
    serialCodes?: number[]
}

