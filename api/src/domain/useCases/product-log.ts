import ProductLog from 'domain/entities/product-log';
import ProductLogRepository from 'repositories/product-log';

export default class ProductLogUseCase {
    private productLogRepository: ProductLogRepository;
    private productLogEntitie: any;

    constructor(repository: ProductLogRepository, entitie: any) {

        this.productLogRepository = repository;
        this.productLogEntitie = entitie;
    }

    public async createProductLog(productLog: ProductLog) {

        const newProductLog = new this.productLogEntitie(productLog);
        console.log("vai criar productLog", newProductLog)

        const productLogCreated =  await this.productLogRepository.persist(newProductLog);

        return productLogCreated;
    }

    public getCountProductLogsbyProduct(productId: number) {
        return this.productLogRepository.countByProductId(productId);
    }

    public getProductLogsbyProduct(productId: number) {
        return this.productLogRepository.getByProductId(productId);
    }

    public getProductLogsByUser(id: number) {
        return this.productLogRepository.getByUserId(id);
    }
}