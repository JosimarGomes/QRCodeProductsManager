export default class BadRequestError extends Error {
    constructor (message?: string) {
        super(message || 'Bad Request Error');
        this.name = 'BadRequestError';
    }
}