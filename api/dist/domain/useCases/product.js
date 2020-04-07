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
const errors_1 = require("errors");
class ProductUseCase {
    constructor(repository, entitie, productLogRepository) {
        this.productRepository = repository;
        this.productEntitie = entitie;
        this.productLogRepository = productLogRepository;
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!product.name) {
                throw new errors_1.BadRequestError('Informe um nome para o produto');
            }
            if (!product.value) {
                throw new errors_1.BadRequestError('Informe um valor para o produto');
            }
            const newProduct = new this.productEntitie(product);
            const productCreated = yield this.productRepository.persist(newProduct);
            return productCreated;
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productToUpdate = new this.productEntitie(product);
            const updatedProduct = yield this.productRepository.merge(productToUpdate);
            return updatedProduct;
        });
    }
    getProducts() {
        return this.productRepository.getAll();
    }
    getProductById(id) {
        return this.productRepository.getById(id);
    }
    getProductsBySerialCode(serialCode, userId) {
        const product = this.productRepository.getBySerialCode(serialCode);
        if (userId) {
            this.productLogRepository.persist({
                productId: product.id,
                userId,
                date: new Date(),
                productName: product.name,
                serialCode: serialCode,
                productValue: product.value,
                productDescription: product.description
            });
        }
        return product;
    }
    deleteProduct(productId) {
        this.productRepository.deleteById(productId);
    }
}
exports.default = ProductUseCase;
