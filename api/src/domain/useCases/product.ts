import Product from 'domain/entities/product';
import ProductRepository from 'repositories/products';
import ProductlogRepository from 'repositories/product-log';
import { BadRequestError } from 'errors';

export default class ProductUseCase {
    private productRepository: ProductRepository;
    private productEntitie: any;
    private productLogRepository: ProductlogRepository;

    constructor(repository: ProductRepository, entitie: any, productLogRepository: ProductlogRepository) {

        this.productRepository = repository;
        this.productEntitie = entitie;
        this.productLogRepository = productLogRepository;
    }

    public async createProduct(product: Product): Promise<Product> {

        if (!product.name) {
            throw new BadRequestError('Informe um nome para o produto')
        }

        if (!product.value) {
            throw new BadRequestError('Informe um valor para o produto')
        }

        const newProduct = new this.productEntitie(product);

        const productCreated =  await this.productRepository.persist(newProduct) as Product;

        return productCreated;
    }

    public async updateProduct(product: Product): Promise<Product> {
        const productToUpdate = new this.productEntitie(product);
        const updatedProduct = await this.productRepository.merge(productToUpdate);

        return updatedProduct;
    }

    public getProducts() {
        return this.productRepository.getAll();
    }

    public getProductById(id: number) {
        return this.productRepository.getById(id);
    }

    public getProductsBySerialCode(serialCode: number, userId?: any) {
        const product = this.productRepository.getBySerialCode(serialCode);

        if (userId) {
            this.productLogRepository.persist({
                productId: product.id,
                userId,
                date: new Date(),
                productName: product.name,
                serialCode: serialCode,
                productValue: product.value,
                productDescription: product.description
            });
        }

        return product;
    }

    public deleteProduct(productId: number) {
        this.productRepository.deleteById(productId);
    }
}