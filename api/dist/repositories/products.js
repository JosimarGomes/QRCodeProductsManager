"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductRepository {
    constructor(databaseAccess) {
        this.databaseAccess = databaseAccess;
    }
    persist(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield this.databaseAccess.create(product);
            return newProduct;
        });
    }
    merge(product) {
        const updatedProduct = this.databaseAccess.update(product);
        return updatedProduct;
    }
    remove(productId) {
        console.log("vou remover esse produto:", productId);
    }
    getAll() {
        return this.databaseAccess.getAll();
    }
    getById(productId) {
        return this.databaseAccess.getById(productId);
    }
    getBySerialCode(serialCode) {
        return this.databaseAccess.getAll({ bySerialCode: serialCode });
    }
    deleteById(id) {
        return this.databaseAccess.delete(id);
    }
}
exports.default = ProductRepository;
