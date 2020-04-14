"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const adapters_1 = require("adapters");
const hapi_http_response_1 = __importDefault(require("./hapi-http-response"));
class HapiServer {
    constructor(port, routes) {
        this.port = port;
        this.hapiServer = new hapi_1.default.Server({
            port,
            host: 'localhost',
            routes: { cors: true, log: { collect: true } },
            debug: {
                log: ['hapi', 'error', 'debug', 'info', 'warning', 'request', 'server', 'timeout', 'internal', 'implementation', 'tail', 'remove', 'last', 'add'],
                request: ['hapi', 'error', 'debug', 'info', 'warning', 'request', 'server', 'timeout', 'internal', 'implementation', 'tail', 'remove', 'last', 'add']
            }
        });
        this.setup(routes);
    }
    setup(routes) {
        this.initializeRoutes(routes);
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.hapiServer.route(Object.assign(Object.assign({}, route), { handler: (request, response) => setHttpAdapters(request, response, route.handler) }));
        });
    }
    serverUp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hapiServer.start();
            console.log(`server happi start on port: ${this.port}`);
        });
    }
}
exports.default = HapiServer;
const setHttpAdapters = (request, response, handler) => {
    const httpRequest = new adapters_1.HttpRequest({
        body: request.payload,
        params: request.params,
        query: request.query,
        headers: request.headers,
    });
    const expressResponseAdapter = new hapi_http_response_1.default(response);
    const httpResponse = new adapters_1.HttpResponse(expressResponseAdapter);
    return handler(httpRequest, httpResponse);
};
