import { ServerInterface } from 'adapters';


export default class Server {

    private serverAdapter: ServerInterface;
    constructor(serverAdapter: ServerInterface) {
        this.serverAdapter = serverAdapter;
    }

    public listen() {
        this.serverAdapter.serverUp();;
    }
    
}