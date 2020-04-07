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
class ProductLogRepository {
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
        console.log("vou mergear nesse produto:", product);
    }
    remove(productId) {
        console.log("vou remover esse produto:", productId);
    }
    getAll() {
        return this.databaseAccess.getAll();
    }
    getById(id) {
        return this.databaseAccess.getById(id);
    }
    getByUserId(userId) {
        return this.databaseAccess.getByUserId(userId);
    }
    getByProductId(productId) {
        return this.databaseAccess.getByProductId(productId);
    }
    countByProductId(productId) {
        return this.databaseAccess.countByProductId(productId);
    }
}
exports.default = ProductLogRepository;
