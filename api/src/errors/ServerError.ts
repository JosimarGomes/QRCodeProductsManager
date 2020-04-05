export default class ServerError extends Error {
    constructor (message?: string) {
        super(message || 'Internal Server Error');
        this.name = 'ServerError';
    }
}