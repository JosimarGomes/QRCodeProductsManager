"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const composer_1 = __importDefault(require("webserver/controllers/products/composer"));
const compose_1 = __importDefault(require("webserver/controllers/product-logs/compose"));
const productController = composer_1.default();
const productLogController = compose_1.default();
const RoutesApp = [
    {
        method: 'PUT',
        path: '/api/v1/products',
        handler: productController.createOrUpdate
    },
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productController.index
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productController.getById
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productController.deleteById
    },
    {
        method: 'GET',
        path: '/api/v1/product-logs',
        handler: productLogController.index
    }
];
exports.default = RoutesApp;
