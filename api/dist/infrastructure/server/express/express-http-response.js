"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpressHttpResponseAdapter {
    constructor(httpResponse) {
        this.response = httpResponse;
    }
    status(status) {
        return this.response.status(status);
    }
    send(objResponse) {
        return this.response.send(objResponse);
    }
    json(objResponse) {
        return this.response.json(objResponse);
    }
}
exports.default = ExpressHttpResponseAdapter;
