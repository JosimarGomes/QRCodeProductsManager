"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    constructor(adapter) {
        this.adapter = adapter;
    }
    send(response) {
        return this.adapter.send(response);
    }
    status(status) {
        return this.adapter.status(status);
    }
    json(object) {
        return this.adapter.json(object);
    }
}
exports.default = HttpResponse;
