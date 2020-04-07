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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database = __importStar(require("./database"));
class ProductEntitieAdapter {
    constructor() {
        this.database = database;
        this.tableName = 'products';
    }
    create(newProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            newProduct.id = Math.round(Math.random() * 1000);
            // simulate async database access
            return new Promise((res) => {
                setTimeout(() => {
                    this.database[this.tableName].push(newProduct);
                    res(newProduct);
                }, 2000);
            });
        });
    }
    update(productToUpdate) {
        const productIndex = this.database[this.tableName].findIndex((product) => product.id === productToUpdate.id);
        if (productIndex === -1) {
            throw Error("Not product valid");
        }
        const oldProduct = this.database[this.tableName][productIndex];
        this.database[this.tableName][productIndex] = Object.assign(Object.assign({}, oldProduct), productToUpdate);
        const updatedProduct = this.database[this.tableName][productIndex];
        return updatedProduct;
    }
    getAll(options = {}) {
        const { bySerialCode } = options;
        if (bySerialCode) {
            const product = this.database[this.tableName].find((product) => {
                return product.serialCodes.find((serial) => serial == bySerialCode);
            });
            return product;
        }
        return this.database[this.tableName];
    }
    getById(id) {
        return this.database[this.tableName].find((item) => item.id == id);
    }
    delete(id) {
        const filteredProducts = this.database[this.tableName]
            .filter((product) => product.id != id);
        this.database[this.tableName] = filteredProducts;
        return true;
    }
}
exports.default = ProductEntitieAdapter;
