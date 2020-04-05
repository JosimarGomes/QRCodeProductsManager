import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Alert } from 'design-system/components/Alerts';
import {
    Input,
    Label,
    SmallInput,
    InputGroup,
    TextArea,
    Form,
    SerialCodeContainer,
    DeleteIcon,
    SerialCodeContent,
    BarCodeIcon,
    SerialCodeGroup
} from './styles';
import Modal from 'design-system/components/Modal';
import Api from 'services/api';
import { TagDefault } from 'design-system/components/Tag';
import { ButtonDefault } from 'design-system/components/Button';
import generateSerialCode from 'libs/serialCode';
import { loadProducts } from 'redux/reducers/products';


function ProductFormModal({ handlerVisibility, visible, editValues, titleForm, loadProducts }) {

    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [alertInfos, setAlertInfos] = useState({});

    useEffect(() => {
        if(editValues) {
            setValues(editValues);
        }

    }, [editValues])

    function changeValues(fieldName, value) {
        setValues({ ...values, [fieldName]: value });
    }

    
    async function onSubmit() {
        setLoading(true);
        
        try {
            await Api.put('/products', values);
            
            loadProducts();

            setLoading(false);
            handlerVisibility(false);
            setValues({});

            setAlertInfos({
                show: true,
                message: 'Solicitação concluída com sucesso!',
                type: 'success'
            });
            

        } catch(err) {
            setLoading(false);

            setAlertInfos({
                show: true,
                message: 'Erro ao processar solicitação',
                type: 'error'
            });
        }
    }

    function removeSerial(serial) {
        const serialCodes = values.serialCodes.filter(serialCode => serialCode !== serial);
        setValues({ ...values, serialCodes })
    }

    const addSerialCode = (evt) => {
        evt.preventDefault();
        
        const newCode = generateSerialCode();
        const serialCodes = values.serialCodes || [];
        serialCodes.push(newCode);

        setValues({ ...values, serialCodes })
    }

    return (
        <>
            <Modal
                title={titleForm || "Novo Produto"}
                visible={visible}
                onOk={onSubmit}
                onCancel={() => handlerVisibility(false)}
                okButton="Salvar"
                cancelButton="Cancelar"
                loadingButton={loading}
                >
                <Form>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input
                            onChange={({ target }) => changeValues('name', target.value)}
                            value={values.name || ''}
                            />
                    </InputGroup>
                    <InputGroup>
                        <Label>Descrição</Label>
                        <TextArea
                            defaultValue={values.description}
                            onChange={({ target }) => changeValues('description', target.value)}
                            >
                            {values.description}
                        </TextArea>
                    </InputGroup>
                    <InputGroup>
                        <Label>Valor</Label>
                        <SmallInput
                            onChange={({ target }) => changeValues('value', target.value)}
                            value={values.value || ''}
                            />
                    </InputGroup>
                    {
                        <>
                        <SerialCodeContainer>
                            <div>
                                <Label>
                                    <BarCodeIcon />Códigos Seriais
                                </Label>
                            </div>
                            <SerialCodeGroup>
                                {
                                    values.serialCodes &&
                                    values.serialCodes.length > 0 && (
                                        values.serialCodes.map(serial => {
                                            return (
                                                <SerialCodeContent key={serial}>
                                                    <TagDefault>{serial}</TagDefault>
                                                    <DeleteIcon onClick={() => removeSerial(serial)} />
                                                </SerialCodeContent>
                                            )
                                        })
                                    )
                                }
                            </SerialCodeGroup>
                        </SerialCodeContainer>
                        <ButtonDefault onClick={addSerialCode}>
                            <PlusCircleOutlined />
                            Gerar código serial
                        </ButtonDefault>
                        </>
                    }
                </Form >
            </Modal>
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
        </>
    )
}

const mapStateToProps = null;

const mapDispatchToProps = (
    {
        loadProducts
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormModal);