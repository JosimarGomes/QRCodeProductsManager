"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HapiHttpResponseAdapter {
    constructor(httpResponse) {
        this.response = httpResponse;
    }
    status(status) {
        return this.response.response().code(status);
    }
    send(objResponse) {
        return this.response.response(objResponse);
    }
    json(objResponse) {
        return this.response.response(objResponse);
    }
}
exports.default = HapiHttpResponseAdapter;
