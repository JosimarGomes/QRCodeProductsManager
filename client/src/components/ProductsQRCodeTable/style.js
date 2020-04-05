import styled from 'styled-components';
import {
    BORDER_WIDTH_M,
    COLOR_NEUTRAL_LIGHT,
    BORDER_RADIUS_S,
    SPACING_STACK_XS
} from 'design-system';

export const TableContainer = styled.div`
    border: ${BORDER_WIDTH_M}px solid ${COLOR_NEUTRAL_LIGHT};
    padding: ${SPACING_STACK_XS}px;
    border-radius: ${BORDER_RADIUS_S}px;
`;

export const QRCodeInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${SPACING_STACK_XS}px 0px;
`;

export const SerialCodeInfo = styled.div`
    margin-top: ${SPACING_STACK_XS}px;
`;