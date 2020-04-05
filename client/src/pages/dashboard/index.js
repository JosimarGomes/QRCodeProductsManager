import React, { useState } from 'react';
import {
    PlusCircleOutlined
} from '@ant-design/icons';
import { ButtonPrimary } from 'design-system/components/Button';
import {
    Container,
    ContainerButton,
} from './styles';
import ProductsTable from 'components/ProductsTable';
import ProductFormModal from 'components/ProductFormModal';

export default function Dashboard() {

    const [showFormNewProduct, setShowFormNewProduct] = useState(false);

    function handleVisibilityFormNewProduct(visibility) {
        setShowFormNewProduct(visibility)
    }

    return (
        <Container>
            <h2>Painel Adm</h2>
            <ProductsTable />
            <ContainerButton>
                <ButtonPrimary
                    onClick={() => handleVisibilityFormNewProduct(true)}
                    >
                    <PlusCircleOutlined />
                    Novo produto
                </ButtonPrimary>
            </ContainerButton>
            <ProductFormModal
                visible={showFormNewProduct}
                handlerVisibility={handleVisibilityFormNewProduct}
                />
        </Container>
    )
}