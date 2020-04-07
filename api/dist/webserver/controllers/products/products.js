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
class ProductController {
    constructor(productUseCase) {
        this.createOrUpdate = (httpRequest, httpResponse) => __awaiter(this, void 0, void 0, function* () {
            const { name, value, description, id, serialCodes } = httpRequest.body;
            let productCreated;
            if (id) {
                productCreated = yield this.productUseCase.updateProduct({ name, value, description, id, serialCodes });
            }
            else {
                productCreated = yield this.productUseCase.createProduct({ name, value, description, serialCodes });
            }
            return httpResponse.send(productCreated);
        });
        this.index = (httpRequest, httpResponse) => {
            const { serialCode } = httpRequest.query;
            if (serialCode) {
                const userId = httpRequest.headers.authorization;
                const productBySerialCode = this.productUseCase.getProductsBySerialCode(serialCode, userId);
                return httpResponse.send(productBySerialCode);
            }
            const products = this.productUseCase.getProducts();
            return httpResponse.send(products);
        };
        this.getById = (httpRequest, httpResponse) => {
            const { id } = httpRequest.params;
            const product = this.productUseCase.getProductById(id);
            return httpResponse.send(product);
        };
        this.deleteById = (httpRequest, httpResponse) => {
            const { id } = httpRequest.params;
            this.productUseCase.deleteProduct(id);
            return httpResponse.send('ok');
        };
        this.productUseCase = productUseCase;
    }
}
exports.default = ProductController;
