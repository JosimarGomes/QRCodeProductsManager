import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import {
    ServerInterface,
    HttpRequest,
    HttpResponse
} from 'adapters';
import { RouteApp } from 'types';
import ExpressHttpResponseAdapter from './express-http-response';


const setHttpAdapters = (request: Request, response: Response,
    handler: (request: HttpRequest, response: HttpResponse) => void) => {
    
    const httpRequest = new HttpRequest({
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
    });

    const expressResponseAdapter = new ExpressHttpResponseAdapter(response);
    const httpResponse = new HttpResponse(expressResponseAdapter);

    return handler(httpRequest, httpResponse)
}

export default class ExpressServer implements ServerInterface {
    public port: number;

    private express: express.Application;

    public constructor(port: number, routes:RouteApp[]) {
        this.port = port;
        this.express = express();
        this.setup(routes);
    }

    public setup(routes:RouteApp[]): void {
        this.middlewares();
        this.initializeRoutes(routes);
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(morgan('tiny'));
        this.express.use((error: Error,_req: Request, _res: Response, _next: NextFunction) => {
            console.log("error", error)
        })
    }

    private initializeRoutes(routes: RouteApp[]): void {
        routes.forEach((route) => {
            const httpMethod = route.method.toLowerCase();

            switch(httpMethod) {
                case 'get':
                    this.express.get(route.path,
                        (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'post':
                    this.express.post(route.path,
                        (request: Request, response: Response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'put':
                    this.express.put(route.path,
                        (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'delete':
                    this.express.delete(route.path,
                        (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'patch':
                    this.express.patch(route.path,
                        (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                case 'option':
                    this.express.options(route.path,
                        (request, response) => setHttpAdapters(request, response, route.handler));
                    break;
                default:
                    throw Error('Http Method not implemented');
            }
        });
    }

    public async serverUp(): Promise<void> {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
};