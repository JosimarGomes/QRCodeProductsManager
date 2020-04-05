import React from 'react';
import { Container } from './styles';
import ProductsQRCodeTable from 'components/ProductsQRCodeTable';

export default function Products() {
    return (
        <Container>
            <h2>Lista de Produtos</h2>
            <ProductsQRCodeTable/>
        </Container>
    )
}