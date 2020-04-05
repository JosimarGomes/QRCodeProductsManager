import React from 'react';
import { createPortal } from 'react-dom';
import { LoadingOutlined } from '@ant-design/icons';
import {
    Container,
    Content,
    ContentChildren,
    ModalTitle,
    ModalFooter,
    ButtonDefault,
    ButtonPrimary
} from './styles';

export default function Modal({
    children, visible, onCancel, title, okButton, cancelButton,
onOk, size, loadingButton }){  

    function stopClickPropagation(event) {
        event.stopPropagation();
    }

    if(!visible) {
        return null;
    }

    return (
        createPortal(
            <Container onClick={onCancel}>
                <Content onClick={stopClickPropagation} size={size}>
                    {
                        title && <ModalTitle>{title}</ModalTitle>
                    }
                    <ContentChildren>
                        {children}
                    </ContentChildren>
                    <ModalFooter>
                        <ButtonDefault onClick={onCancel} >
                            { cancelButton || 'Cancelar' }
                        </ButtonDefault>
                        {
                            typeof onOk === 'function' && (
                                <ButtonPrimary onClick={onOk}>
                                    {
                                        loadingButton === true && (
                                            <LoadingOutlined />
                                        )
                                    }
                                    { okButton || 'Salvar' }
                                </ButtonPrimary>
                            )
                        }
                    </ModalFooter>
                </Content>
            </Container>,
            document.getElementById('modal')
        )
    )
}