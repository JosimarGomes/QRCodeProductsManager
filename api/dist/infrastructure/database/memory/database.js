"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("domain/entities/product"));
const product_log_1 = __importDefault(require("domain/entities/product-log"));
exports.products = [
    new product_1.default({
        id: 1,
        name: 'Notebook Dell',
        description: 'Dell, core i5, 16GB RAM',
        value: 1800.00,
        serialCodes: [
            12345678,
            3434534534,
            909980,
            89898989898
        ]
    }),
    new product_1.default({
        id: 2,
        name: 'Celular Motorolla MotoG5',
        description: '2Gb Ram, 32Hd, Câmera 14mpx, Netflix',
        value: 849.99,
        serialCodes: [
            1234567890,
            9934534534
        ]
    })
];
exports.products_log = [
    new product_log_1.default({
        id: 34,
        productId: 1,
        userId: 'josue',
        date: new Date(),
        productName: 'Notebook Dell',
        serialCode: 3345435435,
        productDescription: 'Dell, core i5, 16GB RAM',
        productValue: 899.99
    }),
    new product_log_1.default({
        id: 35,
        productId: 1,
        userId: 'manoelsouza',
        date: new Date(),
        productName: 'Notebook Dell',
        serialCode: 3243434222,
        productValue: 3999.89,
        productDescription: 'Dell, core i5, 16GB RAM'
    }),
    new product_log_1.default({
        id: 35,
        productId: 2,
        userId: 'josue',
        date: new Date(),
        productName: 'Celular Motorolla MotoG5',
        serialCode: 89797973498,
        productDescription: '2Gb Ram, 32Hd, Câmera 14mpx, Netflix',
        productValue: 2899.99
    })
];
