"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    constructor(message) {
        super(message || 'Internal Server Error');
        this.name = 'ServerError';
    }
}
exports.default = ServerError;
