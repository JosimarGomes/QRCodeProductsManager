import React from 'react';
import {
    SuccessIcon,
    DangerIcon,
    InfoIcon,
    Message,
    Container
} from './styles';
import Modal from '../Modal';

export function Alert({ visible, handlerVisibility, type, message }) {

    function getIconByType(type) {
        if (type === 'error') {
            return <DangerIcon />
        }
    
        return <SuccessIcon />
    }

    return (
        <Modal
            visible={visible}
            onCancel={() => handlerVisibility(false)}
            cancelButton="Ok"
        >
            <Container>
                { getIconByType(type) }
                <Message>{ message }</Message>
            </Container>
        </Modal>
    )
}

export function Confirm({ visible, onConfirm, handlerVisibility, message, loading }) {

    return (
        <Modal
            visible={visible}
            onCancel={() => handlerVisibility(false)}
            onOk={onConfirm}
            cancelButton="Cancelar"
            okButton="Confirmar"
            loadingButton={loading}
        >
            <Container>
                <InfoIcon />
                <Message>{ message }</Message>
            </Container>
        </Modal>
    )
}