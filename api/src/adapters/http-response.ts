// import { UnauthorizedError, ServerError } from 'errors';
import { HttpResponseInterface } from 'adapters';

export default class HttpResponse {

    private adapter: HttpResponseInterface;

    constructor(adapter: HttpResponseInterface) {
        this.adapter = adapter;
    }

    public send(response: any): any {
        return this.adapter.send(response);
    }

    public status(status: number) {
        return this.adapter.status(status);
    }

    public json(object: any): any {
        return this.adapter.json(object)
    }

    // public status

    // send
    // cookie
    // status
    // header

    // public static ok(body: Object | Object[]) {
    //     return {
    //         statusCode: 200,
    //         body
    //     }
    // }

    // public static noContent () {
    //     return {
    //         statusCode: 204
    //     }
    // }

    // public static badRequest (error: Error) {
    //     return {
    //         statusCode: 400,
    //         body: {
    //             error: error.message
    //         }
    //     }
    // }

    // public static unauthorizedError () {
    //     return {
    //         statusCode: 401,
    //         body: {
    //             error: new UnauthorizedError().message
    //         }
    //     }
    // }

    // public static serverError () {
    //     return {
    //         statusCode: 500,
    //         body: {
    //             error: new ServerError().message
    //         }
    //     }
    // }
}