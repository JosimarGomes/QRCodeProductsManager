import Hapi, { ResponseToolkit, Request } from '@hapi/hapi';
import {
    ServerInterface,
    HttpRequest,
    HttpResponse
} from 'adapters';
import { RouteApp } from 'types';
import HapiHttpResponseAdapter from './hapi-http-response';

export default class HapiServer implements ServerInterface {
    public port: number;

    private hapiServer: Hapi.Server;

    public constructor(port: number, routes:RouteApp[]) {
        this.port = port;
        this.hapiServer = new Hapi.Server({
            port,
            host: 'localhost',
            routes: { cors: true, log: { collect: true } },
        });
        this.setup(routes);
    }

    public setup(routes:RouteApp[]): void {
        this.initializeRoutes(routes);  
    }

    private initializeRoutes(routes: RouteApp[]): void {
        routes.forEach((route) => {
            this.hapiServer.route({
                ...route,
                handler: (request, response) => setHttpAdapters(request, response, route.handler)
            });
        });
    }

    public async serverUp(): Promise<void> {
        await this.hapiServer.start();
        console.log(`server happi start on port: ${this.port}`);
    }

    
}

const setHttpAdapters = (request: Request, response: ResponseToolkit,
    handler: (request: HttpRequest, response: HttpResponse) => void) => {
    const httpRequest = new HttpRequest({
        body: request.payload,
        params: request.params,
        query: request.query,
        headers: request.headers,
    });

    const expressResponseAdapter = new HapiHttpResponseAdapter(response);
    const httpResponse = new HttpResponse(expressResponseAdapter);

    return handler(httpRequest, httpResponse)
}