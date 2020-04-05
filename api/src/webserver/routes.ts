import composerProducts from 'webserver/controllers/products/composer';
import composeProductLogs from 'webserver/controllers/product-logs/compose';

const productController = composerProducts();
const productLogController = composeProductLogs();


import { RouteApp } from 'types';

const RoutesApp: RouteApp[] = [
    {
        method: 'PUT',
        path: '/api/v1/products',
        handler: productController.createOrUpdate
    },
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productController.index
    },
    {
        method: 'GET',
        path: '/api/v1/products/:id',
        handler: productController.getById
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/:id',
        handler: productController.deleteById
    },
    {
        method: 'GET',
        path: '/api/v1/product-logs',
        handler: productLogController.index
    }
];

export default RoutesApp;