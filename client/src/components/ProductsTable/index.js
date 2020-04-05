import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Confirm, Alert } from 'design-system/components/Alerts';
import {
    FormOutlined,
    DeleteOutlined,
    LineChartOutlined
} from '@ant-design/icons';
import Table from 'design-system/components/Table';
import ProductFormModal from 'components/ProductFormModal';
import QRCodeModal from 'components/QRCodeModal';
import ProductsHistoricModal from 'components/ProductsHistoricModal';
import {
    TableContainer,
    ProductName,
    ProductInfo,
    ContainerButton,
    Button,
    ProductDescription,
    TagSerial
} from './styles';
import { currencyToPtBR } from 'utils/currency';
import Api, { BASE_URL_API } from 'services/api';
import {
    loadProducts,
    isLoading,
    getProducts
} from 'redux/reducers/products';

function ProductsTable({ loadProducts, products, loading }) {

    const [showFormEditProduct, setShowFormEditProduct] = useState(false);
    const [showQRCodemodal, setShowQRCodeModal] = useState(false);
    const [qrCodeModalProduct, setQRCodeModalProduct] = useState({});
    const [qrCodeModalValue, setQRCodeModalValue] = useState('');
    const [showModalProductHistoric, setShowModalProductHistoric] = useState(false);
    const [historicModalProduct, setHistoricModalProduct] = useState({});
    const [formEditValues, setFormEditValues] = useState({});
    const [confirmModal, setConfirmModal] = useState({});
    const [alertInfos, setAlertInfos] = useState({});

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    function handleEditProduct(product) {
        setShowFormEditProduct(true);
        setFormEditValues(product);
    }

    function handlerVisibilityEditProduct() {
        setShowFormEditProduct(false);
        setFormEditValues({});
        setQRCodeModalValue('');
    }

    function handlerQRCodeModal(product, serial) {
        setShowQRCodeModal(true)
        setQRCodeModalProduct(product);
        setQRCodeModalValue(`${BASE_URL_API}/products?serialCode=${serial}`)

    }

    function handleHistoricProduct(product) {
        setShowModalProductHistoric(true);
        setHistoricModalProduct(product);
    }

    async function onConfirmDeleteProduct(product) {
        
        // Essa indecência foi preciso porque fiz uma tentativa de deixar o Modal de Confirmação genérico, para reuso futuro nessa tela
        // Pelo fato de adicionar a função de callback dentro do state, ele perde as referências.
        // #Ponto de melhoria
        setConfirmModal({
            show: true,
            message: 'Excluir o item?',
            onConfirm: () => false,
            loading: true
        });

        try {
            
            await Api.delete(`/products/${product.id}`);

            loadProducts();

            setConfirmModal({
                show: false,
            });
    
            setAlertInfos({
                show: true,
                message: 'Solicitação concluída com sucesso!',
                type: 'success'
            });
            
        } catch(err) {
            setConfirmModal({
                show: false,
            });
    
            setAlertInfos({
                show: true,
                message: 'Erro ao processar solicitação!',
                type: 'error'
            });
        }
    }

    function handleDeleteProduct(product) {
        setConfirmModal({
            show: true,
            message: 'Excluir o item?',
            onConfirm: () => onConfirmDeleteProduct(product)
        })
    }

    const columns = [
        {
            title: 'Produto',
            render: product => <ProductName>{product.name}</ProductName>
        },
        {
            title: 'Descrição',
            render: product => <ProductDescription>{product.description}</ProductDescription>
        },
        {
            title: 'Valor',
            render: product => <ProductInfo>{currencyToPtBR(product.value)}</ProductInfo>
        },
        {
            title: 'Serial',
            render: product => {
                return (
                    <ProductInfo>
                        {product.serialCodes.map(serial => {
                            return (
                                <TagSerial
                                    key={serial}
                                    onClick={() => handlerQRCodeModal(product, serial)}
                                    title="Clique para ver o QRCode"
                                >
                                    {serial}
                                </TagSerial>
                            )
                        })}
                    </ProductInfo>
                )
            }
        },
        {
            title: '',
            render: (product) => (
                <ContainerButton>
                    <Button onClick={() => handleHistoricProduct(product)}>
                        <LineChartOutlined />
                        Leituras
                    </Button>
                    <Button onClick={() => handleEditProduct(product)}>
                        <FormOutlined />
                        Editar
                    </Button>
                    <Button onClick={() => handleDeleteProduct(product)}>
                        <DeleteOutlined />
                        Remover
                    </Button>
                </ContainerButton>
            )
        }
    ];

    return (
        <TableContainer>
            <Table
                loading={loading}
                dataKey="id"
                columns={columns}
                data={products}
                />
            <ProductFormModal
                titleForm="Editar Produto"
                editValues={formEditValues}
                visible={showFormEditProduct}
                handlerVisibility={handlerVisibilityEditProduct}
                />
            <QRCodeModal
                title={qrCodeModalProduct.name}
                value={qrCodeModalValue}
                visible={showQRCodemodal}
                handlerVisibility={setShowQRCodeModal}
            />
            <Confirm
                visible={confirmModal.show}
                onConfirm={confirmModal.onConfirm}
                handlerVisibility={() => {
                    setConfirmModal({
                        message: '',
                        show: false,
                        onConfirm: null
                    })
                }}
                message={confirmModal.message}
                loading={confirmModal.loading}
            />
            <Alert
                visible={alertInfos.show}
                type={alertInfos.type || ""}
                message={alertInfos.message}
                handlerVisibility={() => setAlertInfos({
                    show: false,
                    message: '',
                    type: ''
                })}
            />
            <ProductsHistoricModal
                visible={showModalProductHistoric}
                handlerVisibility={(flag) => setShowModalProductHistoric(flag)}
                product={historicModalProduct}
            />
        </TableContainer>
    )
}

const mapStateToProps = state => {
    return {
        products: getProducts(state),
        loading: isLoading(state),
    };
};

const mapDispatchToProps = (
    {
        loadProducts
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);