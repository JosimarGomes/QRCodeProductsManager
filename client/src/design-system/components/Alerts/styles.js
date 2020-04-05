import styled from 'styled-components';
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
    COLOR_SUPORTE_SUCCESS,
    COLOR_SUPORTE_DANGER,
    COLOR_SUPORTE_PRIMARY,
    FONT_SIZE_L,
    COLOR_NEUTRAL_DARK,
    SPACING_STACK_XXS
} from 'design-system';

export const SuccessIcon = styled(CheckCircleOutlined)`
    color: ${COLOR_SUPORTE_SUCCESS};
    font-size: ${FONT_SIZE_L};
`;

export const DangerIcon = styled(ExclamationCircleOutlined)`
    color: ${COLOR_SUPORTE_DANGER};
    font-size: ${FONT_SIZE_L};
`;

export const InfoIcon = styled(ExclamationCircleOutlined)`
    color: ${COLOR_SUPORTE_PRIMARY};
    font-size: ${FONT_SIZE_L};
`;

export const Message = styled.span`
    color: ${COLOR_NEUTRAL_DARK};
    margin-left: ${SPACING_STACK_XXS}px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;