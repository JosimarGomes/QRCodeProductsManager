import { ObjectLiteral } from 'types';

type httpRequest = {
    body?: ObjectLiteral,
    params?: ObjectLiteral,
    query?: ObjectLiteral,
    headers: ObjectLiteral
}

export default class HttpRequest {    
    public body?: any;
    public params?: ObjectLiteral | any;
    public query?: ObjectLiteral | any;
    public headers: ObjectLiteral;


    constructor({ body, params, query, headers }: httpRequest) {
        this.body = body;
        this.params = params;
        this.query = query;
        this.headers = headers;
    }

}