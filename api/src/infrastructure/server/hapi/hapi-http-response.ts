import { ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { HttpResponseInterface } from 'adapters';

export default class HapiHttpResponseAdapter implements HttpResponseInterface {
    private response: ResponseToolkit;

    constructor(httpResponse: ResponseToolkit) {
        this.response = httpResponse;
    }

    public status(status: number): ResponseObject {
        return this.response.response().code(status);
    }

    public send(objResponse: any): ResponseObject {
        return this.response.response(objResponse)
    }

    public json(objResponse: any): ResponseObject {
        return this.response.response(objResponse)
    }
}