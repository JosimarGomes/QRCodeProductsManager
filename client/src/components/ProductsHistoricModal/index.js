import React, { useState, useEffect } from 'react';
import Api from 'services/api';
import Modal from 'design-system/components/Modal';
import Table from 'design-system/components/Table';
import { dateToPtBR } from 'utils/date';
import { ProductInfo } from './styles';


export default function ProducsHistoricModal({ visible, handlerVisibility, product }) {
    
    const [isLoading, setLoading] = useState(false);
    const [productHistorics, setProductHistorics] = useState([]);

    async function fetchProductHistorics() {
        if (!product) {
            return;
        }
        
        setLoading(true);
        const { data } = await Api.get(`/product-logs?productId=${product.id}`);

        setProductHistorics(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchProductHistorics();
    }, [product]);

    const columns = [
        {
            title: 'Usuário',
            render: historic => <ProductInfo>{historic.userId}</ProductInfo>
        },
        {
            title: 'Código',
            render: historic => <ProductInfo>{historic.serialCode}</ProductInfo>
        },
        {
            title: 'Data',
            render: historic => <ProductInfo>{dateToPtBR(historic.date)}</ProductInfo>
        }

    ]
    
    return (
        <Modal
            title={`Leituras: ${product.name}`}
            visible={visible}
            onCancel={() => handlerVisibility(false)}
            cancelButton="Fechar"
            size="medium"
            >
                <Table
                    loading={isLoading}
                    dataKey="id"
                    columns={columns}
                    data={productHistorics}
                    />
        </Modal>
    )
}