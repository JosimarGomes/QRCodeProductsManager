import { DataBaseAccessInterface } from 'adapters';
import * as database from './database'

export default class ProductLogEntitieAdapter implements DataBaseAccessInterface {

    private database: any;
    private tableName: string;

    constructor() {
        this.database = database;
        this.tableName = 'products_log';
    }

    async create(newProductLog: any) {

        newProductLog.id = Math.round(Math.random() * 1000)

        // simulate async database access
        return new Promise((res) => {
            setTimeout(()=> {
                this.database[this.tableName].push(newProductLog);
                res(newProductLog)
            }, 2000)
        });
    }

    update() {

    }

    delete() {
        
    }

    getAll() {
        return this.database[this.tableName];
    }

    countByProductId(productId: number) {
        return this.database[this.tableName].filter((productLog: any) => productLog.productId == productId).length;
    }

    getById(id: number) {
        return this.database[this.tableName].find((productLog: any) => productLog.id == id);
    }

    getByUserId(userId: number) {
        const productLogs = this.database[this.tableName].filter((productLog: any) => productLog.userId == userId);
        productLogs.sort((a: any, b: any) => {
            if (a.date > b.date) {
                return -1;
            }

            if (a.date < b.date) {
                return 1
            }

            return 0;
        });

        return productLogs;
    }

    getByProductId(productId: number) {
        return this.database[this.tableName].filter((productLog: any) => productLog.productId == productId);
    }
}