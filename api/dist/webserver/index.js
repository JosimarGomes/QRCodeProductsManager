"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === 'production') {
    require('module-alias/register');
}
// import ExpressServer from '../infrastructure/server/express/express';
const hapi_1 = __importDefault(require("../infrastructure/server/hapi/hapi"));
const routes_1 = __importDefault(require("./routes"));
const server_1 = __importDefault(require("./server"));
const port = process.env.PORT || 3333;
// const serverAdapter = new ExpressServer(port as number, appRoutes);
const serverAdapter = new hapi_1.default(port, routes_1.default);
const server = new server_1.default(serverAdapter);
server.listen();
