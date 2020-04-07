"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnauthorizedError extends Error {
    constructor(message) {
        super(message || 'Unauthorized');
        this.name = 'UnauthorizedError';
    }
}
exports.default = UnauthorizedError;
