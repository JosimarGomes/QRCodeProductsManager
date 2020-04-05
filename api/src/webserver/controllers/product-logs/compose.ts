import ProductLogController from 'webserver/controllers/product-logs/products-log';
import ProductLog from 'domain/entities/product-log';
import ProductLogEntitieAdapter from 'infrastructure/database/memory/product-log-entitie';
import ProductLogRepository from 'repositories/product-log';
import ProductLogUseCase from 'domain/useCases/product-log';

export default (): ProductLogController => {

    const productLogEntitieAdapter = new ProductLogEntitieAdapter();
    const productLogRepository = new ProductLogRepository(productLogEntitieAdapter);
    const productLogUseCase = new ProductLogUseCase(productLogRepository, ProductLog);
    
    return new ProductLogController(productLogUseCase);
}