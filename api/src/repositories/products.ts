import { RepositoryInterface } from 'adapters';
import Product from 'domain/entities/product';
import ProductEntitieAdapter from 'infrastructure/database/memory/product-entitie'; 

export default class ProductRepository implements RepositoryInterface {

    private databaseAccess: ProductEntitieAdapter;

    constructor(databaseAccess: ProductEntitieAdapter) {
        this.databaseAccess = databaseAccess;
    }

    async persist(product: Product) {
        const newProduct = await this.databaseAccess.create(product);
        return newProduct;
    }

    merge(product: Product) {
        const updatedProduct = this.databaseAccess.update(product);
        return updatedProduct;
    }

    remove(productId: number) {
        console.log("vou remover esse produto:", productId)
    }

    getAll() {
        return this.databaseAccess.getAll();
    }

    getById(productId: number) {
        return this.databaseAccess.getById(productId);
    }

    getBySerialCode(serialCode: number) {
        return this.databaseAccess.getAll({ bySerialCode: serialCode });
    }

    deleteById(id: number) {
        return this.databaseAccess.delete(id);
    }
} 