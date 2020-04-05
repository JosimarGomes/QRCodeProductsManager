import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import {
    TableContainer,
    QRCodeInfo,
    SerialCodeInfo
} from './style';
import Table from 'design-system/components/Table';
import Api, { BASE_URL_API } from 'services/api';

export default function ProductsQRCodeTable() {

    const [serialCodes, setSerialCodes] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);

    async function fetchProducts() {
        setLoadingProducts(true);
        const { data } = await Api.get('/products');

        const sCodes = data.flatMap(product => product.serialCodes);

        setSerialCodes(sCodes);
        setLoadingProducts(false);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const columns = [
        {
            title: 'Produto',
            render: serialCode => (
                <QRCodeInfo>
                    <QRCode value={`${BASE_URL_API}/products?serialCode=${serialCode}`} />
                    <SerialCodeInfo>{serialCode}</SerialCodeInfo>
                </QRCodeInfo>
            )
        }
    ];

    return (
        <TableContainer>
            <Table
                loading={loadingProducts}
                columns={columns}
                data={serialCodes}
            />
        </TableContainer>
    )
}