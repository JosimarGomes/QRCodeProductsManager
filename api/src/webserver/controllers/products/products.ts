import { HttpRequest, HttpResponse } from 'adapters';
import ProductUseCase from 'domain/useCases/product';

export default class ProductController {

    private productUseCase: ProductUseCase;

    constructor(productUseCase: ProductUseCase) {
        this.productUseCase = productUseCase;
    }

    public createOrUpdate = async (httpRequest: HttpRequest, httpResponse: HttpResponse)
        :Promise<HttpResponse> => {
        
        const { name, value, description, id, serialCodes } = httpRequest.body;
        let productCreated;
        
        if(id) {
            productCreated = await this.productUseCase.updateProduct({ name, value, description, id, serialCodes });
        } else {
            productCreated = await this.productUseCase.createProduct({ name, value, description, serialCodes });
        }

        return httpResponse.send(productCreated);
    }

    public index = (httpRequest: HttpRequest, httpResponse: HttpResponse)
        :Promise<HttpResponse> => {

        const { serialCode } = httpRequest.query;

        if (serialCode) {
            const userId = httpRequest.headers. authorization;
            const productBySerialCode = this.productUseCase.getProductsBySerialCode(serialCode, userId);
            return httpResponse.send(productBySerialCode);
        }

        const products = this.productUseCase.getProducts();

        return httpResponse.send(products);
    }

    public getById = (httpRequest: HttpRequest, httpResponse: HttpResponse)
        :Promise<HttpResponse> => {

        const { id } = httpRequest.params;

        const product = this.productUseCase.getProductById(id);

        return httpResponse.send(product);
    }

    public deleteById = (httpRequest: HttpRequest, httpResponse: HttpResponse)
        :Promise<HttpResponse> => {

        const { id } = httpRequest.params;

        this.productUseCase.deleteProduct(id);

        return httpResponse.send('ok');
    }
}
