export default class ProductLog {
    public id?: number;
    public productId: number;
    public date: Date;
    public userId: string;
    public productName: string;
    public serialCode: number;
    public productDescription: string;
    public productValue: number;

    constructor({ productId, date, userId, productName, serialCode,
    productDescription, productValue, id }: ProductLogAttributes) {
        this.productId = productId;
        this.date = date;
        this.userId = userId;
        this.productName = productName;
        this.serialCode = serialCode;
        this.productDescription = productDescription;
        this.productValue = productValue;
        this.id = id;
    }
}

type ProductLogAttributes = {
    id?: number,
    productId: number,
    userId: string,
    date: Date,
    productName: string;
    serialCode: number;
    productDescription: string;
    productValue: number;
}

