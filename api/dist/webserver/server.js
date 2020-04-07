"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(serverAdapter) {
        this.serverAdapter = serverAdapter;
    }
    listen() {
        this.serverAdapter.serverUp();
        ;
    }
}
exports.default = Server;
