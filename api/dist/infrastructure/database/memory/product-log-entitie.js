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
class ProductLogEntitieAdapter {
    constructor() {
        this.database = database;
        this.tableName = 'products_log';
    }
    create(newProductLog) {
        return __awaiter(this, void 0, void 0, function* () {
            newProductLog.id = Math.round(Math.random() * 1000);
            // simulate async database access
            return new Promise((res) => {
                setTimeout(() => {
                    this.database[this.tableName].push(newProductLog);
                    res(newProductLog);
                }, 2000);
            });
        });
    }
    update() {
    }
    delete() {
    }
    getAll() {
        return this.database[this.tableName];
    }
    countByProductId(productId) {
        return this.database[this.tableName].filter((productLog) => productLog.productId == productId).length;
    }
    getById(id) {
        return this.database[this.tableName].find((productLog) => productLog.id == id);
    }
    getByUserId(userId) {
        const productLogs = this.database[this.tableName].filter((productLog) => productLog.userId == userId);
        productLogs.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        });
        return productLogs;
    }
    getByProductId(productId) {
        return this.database[this.tableName].filter((productLog) => productLog.productId == productId);
    }
}
exports.default = ProductLogEntitieAdapter;
