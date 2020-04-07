"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequest {
    constructor({ body, params, query, headers }) {
        this.body = body;
        this.params = params;
        this.query = query;
        this.headers = headers;
    }
}
exports.default = HttpRequest;
