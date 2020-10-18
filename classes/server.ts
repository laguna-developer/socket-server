import Express from 'express';
import { SERVER_PORT } from '../global/enviroment';




export default class Server {
    public app: Express.Application;
    public port: number;

    constructor() {
        this.app = Express();
        this.port = SERVER_PORT;
    }

    start(callback: Function) {
        this.app.listen(this.port, callback);
    }
};