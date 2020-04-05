import { Response } from 'express';
import { HttpResponseInterface } from 'adapters';

export default class ExpressHttpResponseAdapter implements HttpResponseInterface {
    private response: Response;

    constructor(httpResponse: Response) {
        this.response = httpResponse;
    }

    public status(status: number): Response {
        return this.response.status(status)
    }

    public send(objResponse: any): Response<any> {
        return this.response.send(objResponse)
    }

    public json(objResponse: any): Response<any> {
        return this.response.json(objResponse)
    }
}