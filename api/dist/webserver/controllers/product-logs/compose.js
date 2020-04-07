"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_log_1 = __importDefault(require("webserver/controllers/product-logs/products-log"));
const product_log_1 = __importDefault(require("domain/entities/product-log"));
const product_log_entitie_1 = __importDefault(require("infrastructure/database/memory/product-log-entitie"));
const product_log_2 = __importDefault(require("repositories/product-log"));
const product_log_3 = __importDefault(require("domain/useCases/product-log"));
exports.default = () => {
    const productLogEntitieAdapter = new product_log_entitie_1.default();
    const productLogRepository = new product_log_2.default(productLogEntitieAdapter);
    const productLogUseCase = new product_log_3.default(productLogRepository, product_log_1.default);
    return new products_log_1.default(productLogUseCase);
};
