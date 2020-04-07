"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductLog {
    constructor({ productId, date, userId, productName, serialCode, productDescription, productValue, id }) {
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
exports.default = ProductLog;
