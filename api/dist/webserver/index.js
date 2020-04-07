"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("../infrastructure/server/express/express"));
const routes_1 = __importDefault(require("./routes"));
const server_1 = __importDefault(require("./server"));
const port = process.env.PORT || 3333;
const serverAdapter = new express_1.default(port, routes_1.default);
const server = new server_1.default(serverAdapter);
server.listen();
