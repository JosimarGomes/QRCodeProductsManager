import styled from 'styled-components';
import {
    COLOR_NEUTRAL_LIGHT,
    COLOR_NEUTRAL_DARK,
    BORDER_RADIUS_S,
    COLOR_SUPORTE_PRIMARY,
    COLOR_NEUTRAL_WHITE,
    FONT_SIZE_XS,
    SPACING_STACK_XS,
    SPACING_STACK_XXS
} from 'design-system';

export const ButtonDefault = styled.button`
    color: ${COLOR_NEUTRAL_DARK};
    background-color: ${COLOR_NEUTRAL_LIGHT};
    border: none;
    border-radius: ${BORDER_RADIUS_S}px;
    padding: ${SPACING_STACK_XXS}px ${SPACING_STACK_XS}px;
    cursor: pointer;
    font-size: ${FONT_SIZE_XS};
`;

export const ButtonPrimary = styled(ButtonDefault)`
    background-color: ${COLOR_SUPORTE_PRIMARY};
    color: ${COLOR_NEUTRAL_WHITE};
`;