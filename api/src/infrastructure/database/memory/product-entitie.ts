import { DataBaseAccessInterface } from 'adapters';
import * as database from './database'

export default class ProductEntitieAdapter implements DataBaseAccessInterface {

    private database: any;
    private tableName: string;

    constructor() {
        this.database = database;
        this.tableName = 'products';
    }

    async create(newProduct: any) {

        newProduct.id = Math.round(Math.random() * 1000);

        // simulate async database access
        return new Promise((res) => {
            setTimeout(()=> {
                this.database[this.tableName].push(newProduct);
                res(newProduct)
            }, 2000)
        });
    }

    update(productToUpdate: any) {
        const productIndex = this.database[this.tableName].findIndex((
            product: any) => product.id === productToUpdate.id);
       
        if(productIndex === -1) {
            throw Error("Not product valid")
        }
        
        const oldProduct = this.database[this.tableName][productIndex];
        
        this.database[this.tableName][productIndex] = {...oldProduct, ...productToUpdate};

        const updatedProduct = this.database[this.tableName][productIndex];
        return updatedProduct;
    }

    getAll(options = {}) {

        const { bySerialCode } = options as any;
        
        if (bySerialCode) {
            const product = this.database[this.tableName].find((product: any) => {
                return product.serialCodes.find((serial: any) => serial == bySerialCode);
            });

            return product;
        }

        return this.database[this.tableName];
    }

    getById(id: number) {
        return this.database[this.tableName].find((item: any) => item.id == id);
    }

    delete(id: number) {
        const filteredProducts = this.database[this.tableName]
            .filter((product: any) => product.id != id );

        this.database[this.tableName] = filteredProducts;

        return true;
    }
}