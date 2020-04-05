import styled from 'styled-components';
import { ButtonDefault } from 'design-system/components/Button';
import { TagDefault } from 'design-system/components/Tag';

import {
    COLOR_NEUTRAL_LIGHT,
    SPACING_STACK_XS,
    BORDER_RADIUS_S,
    FONT_SIZE_S,
    FONT_SIZE_XS,
    COLOR_NEUTRAL_WHITE,
    BORDER_WIDTH_S,
    BORDER_WIDTH_M,
} from 'design-system';

export const TableContainer = styled.div`
    border: ${BORDER_WIDTH_M}px solid ${COLOR_NEUTRAL_LIGHT};
    padding: ${SPACING_STACK_XS}px;
    border-radius: ${BORDER_RADIUS_S}px;
`;

export const ProductInfo = styled.div`
    font-size: ${FONT_SIZE_XS};
    display: flex;
    flex-wrap: wrap;
`;

export const ProductName = styled(ProductInfo)`
    font-size: ${FONT_SIZE_S};
`;

export const ProductDescription = styled(ProductInfo)`
    min-width: 300px;
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TagSerial = styled(TagDefault)`
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const Button = styled(ButtonDefault)`
    margin: 0px 5px;
    background-color: ${COLOR_NEUTRAL_WHITE};
    border: ${BORDER_WIDTH_S}px dashed ${COLOR_NEUTRAL_LIGHT};
`;

