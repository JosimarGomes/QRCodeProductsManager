import { HttpRequest, HttpResponse } from 'adapters';
import ProductLogUseCase from 'domain/useCases/product-log';

export default class ProductLogController {

    private productLogUseCase: ProductLogUseCase

    constructor(productLogUseCase: ProductLogUseCase) {
        this.productLogUseCase = productLogUseCase
    }

    public index = (httpRequest: HttpRequest, httpResponse: HttpResponse)
        :Promise<HttpResponse> => {

        const { productId, userId } = httpRequest.query; 
        
        let productLogs = [];

        if (productId) {
            productLogs = this.productLogUseCase.getProductLogsbyProduct(productId);
        } else if(userId) {
            productLogs = this.productLogUseCase.getProductLogsByUser(userId);
        }

        return httpResponse.send(productLogs);
    }
}