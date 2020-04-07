"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductLogController {
    constructor(productLogUseCase) {
        this.index = (httpRequest, httpResponse) => {
            const { productId, userId } = httpRequest.query;
            let productLogs = [];
            if (productId) {
                productLogs = this.productLogUseCase.getProductLogsbyProduct(productId);
            }
            else if (userId) {
                productLogs = this.productLogUseCase.getProductLogsByUser(userId);
            }
            return httpResponse.send(productLogs);
        };
        this.productLogUseCase = productLogUseCase;
    }
}
exports.default = ProductLogController;
