import React from 'react';
import Modal from 'design-system/components/Modal';
import QRCode from 'qrcode.react';

export default function QRCodeModal({ title, visible, handlerVisibility, value }) {
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={() => handlerVisibility(false)}
            cancelButton="Fechar"
        >
            <QRCode value={value} />
        </Modal>
    )
}