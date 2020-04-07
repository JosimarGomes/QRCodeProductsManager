"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor({ name, value, description, id, serialCodes = [] }) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.description = description;
        this.serialCodes = serialCodes;
    }
}
exports.default = Product;
