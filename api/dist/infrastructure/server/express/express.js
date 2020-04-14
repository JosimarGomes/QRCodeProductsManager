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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const adapters_1 = require("adapters");
const express_http_response_1 = __importDefault(require("./express-http-response"));
class ExpressServer {
    constructor(port, routes) {
        this.port = port;
        this.express = express_1.default();
        this.setup(routes);
    }
    setup(routes) {
        this.middlewares();
        this.initializeRoutes(routes);
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.use(morgan_1.default('tiny'));
        this.express.use((error, _req, _res, _next) => {
            console.log("error", error);
        });
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            const httpMethod = route.method.toLowerCase();
            switch (httpMethod) {
                case 'get':
                    this.express.get(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'post':
                    this.express.post(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'put':
                    this.express.put(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'delete':
                    this.express.delete(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'patch':
                    this.express.patch(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'option':
                    this.express.options(route.path, (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                default:
                    throw Error('Http Method not implemented');
            }
        });
    }
    serverUp() {
        return __awaiter(this, void 0, void 0, function* () {
            this.express.listen(this.port, () => {
                console.log(`App listening on the port ${this.port}`);
            });
        });
    }
}
exports.default = ExpressServer;
;
const setHttpAdapters = (request, response, handler) => {
    const httpRequest = new adapters_1.HttpRequest({
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
    });
    const expressResponseAdapter = new express_http_response_1.default(response);
    const httpResponse = new adapters_1.HttpResponse(expressResponseAdapter);
    return handler(httpRequest, httpResponse);
};
