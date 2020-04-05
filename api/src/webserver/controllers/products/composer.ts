import ProductUseCase from 'domain/useCases/product';
import ProductController from 'webserver/controllers/products/products';
import ProductRepository from 'repositories/products';
import ProductEntitieAdapter from 'infrastructure/database/memory/product-entitie';
import Product from 'domain/entities/product';
import ProductLogEntitieAdapter from 'infrastructure/database/memory/product-log-entitie';
import ProductLogRepository from 'repositories/product-log';

export default (): ProductController => {

    const productEntitieAdapter = new ProductEntitieAdapter();
    const repository = new ProductRepository(productEntitieAdapter);

    const productLogEntitieAdapter = new ProductLogEntitieAdapter();
    const productLogRepository = new ProductLogRepository(productLogEntitieAdapter);

    const productUseCase = new ProductUseCase(repository, Product, productLogRepository);
    
    return new ProductController(productUseCase);
}