"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("domain/useCases/product"));
const products_1 = __importDefault(require("webserver/controllers/products/products"));
const products_2 = __importDefault(require("repositories/products"));
const product_entitie_1 = __importDefault(require("infrastructure/database/memory/product-entitie"));
const product_2 = __importDefault(require("domain/entities/product"));
const product_log_entitie_1 = __importDefault(require("infrastructure/database/memory/product-log-entitie"));
const product_log_1 = __importDefault(require("repositories/product-log"));
exports.default = () => {
    const productEntitieAdapter = new product_entitie_1.default();
    const repository = new products_2.default(productEntitieAdapter);
    const productLogEntitieAdapter = new product_log_entitie_1.default();
    const productLogRepository = new product_log_1.default(productLogEntitieAdapter);
    const productUseCase = new product_1.default(repository, product_2.default, productLogRepository);
    return new products_1.default(productUseCase);
};
