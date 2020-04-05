export default interface HttpResponseInterface {
    send: (args: any) => void;
    status: (statusCode: number) => void;
    json: (args: any) => void;
}