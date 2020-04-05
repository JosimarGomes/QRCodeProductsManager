import styled from 'styled-components';
import { LoadingOutlined, ExceptionOutlined } from '@ant-design/icons';
import {
    COLOR_NEUTRAL_LIGHT,
    SPACING_STACK_XXS,
    COLOR_NEUTRAL_DARK,
    BORDER_WIDTH_S,
    FONT_SIZE_XXS,
    FONT_SIZE_XL,
    COLOR_SUPORTE_PRIMARY
} from 'design-system';

export const Table = styled.table`
    width: 100%;
    border-radius: 20px;
`;

export const TheadTable = styled.thead`
`;

export const TrTable = styled.tr`
`;

export const TdTable = styled.td`
    padding: ${SPACING_STACK_XXS}px;
    border: ${BORDER_WIDTH_S}px solid ${COLOR_NEUTRAL_LIGHT};
`;

export const ThTable = styled.th`
    padding: ${SPACING_STACK_XXS}px;
    border: ${BORDER_WIDTH_S}px solid ${COLOR_NEUTRAL_LIGHT};
    background-color: ${COLOR_NEUTRAL_LIGHT};
    font-weight: bold;
    color: ${COLOR_NEUTRAL_DARK};
    font-size: ${FONT_SIZE_XXS};
    text-align: left;
`;

export const PreLoadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 50vh;
`;

export const LoadingIcon = styled(LoadingOutlined)`
    font-size: ${FONT_SIZE_XL};
    color: ${COLOR_SUPORTE_PRIMARY}
`;

export const NoDataIcon = styled(ExceptionOutlined)`
    font-size: ${FONT_SIZE_XL};
    color: ${COLOR_SUPORTE_PRIMARY};
`;

export const NoDataText = styled.h2`
    color: ${COLOR_NEUTRAL_DARK};
`;