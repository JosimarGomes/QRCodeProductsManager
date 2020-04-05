import { RepositoryInterface } from 'adapters';
import ProductLog from 'domain/entities/product-log';
import ProductLogEntitieAdapter from 'infrastructure/database/memory/product-log-entitie';

export default class ProductLogRepository implements RepositoryInterface {

    private databaseAccess: ProductLogEntitieAdapter;

    constructor(databaseAccess: ProductLogEntitieAdapter) {
        this.databaseAccess = databaseAccess;
    }

    async persist(product: ProductLog) {
        const newProduct = await this.databaseAccess.create(product);
        return newProduct;
    }

    merge(product: ProductLog) {
        console.log("vou mergear nesse produto:", product)
    }

    remove(productId: number) {
        console.log("vou remover esse produto:", productId)
    }

    getAll() {
        return this.databaseAccess.getAll();
    }

    getById(id: number) {
        return this.databaseAccess.getById(id);
    }

    getByUserId(userId: number) {
        return this.databaseAccess.getByUserId(userId)
    }

    getByProductId(productId: number) {
        return this.databaseAccess.getByProductId(productId);
    }

    countByProductId(productId: number) {
        return this.databaseAccess.countByProductId(productId);
    }
} 