import styled from 'styled-components';
import { 
    SPACING_STACK_XXS,
    SPACING_STACK_XXXS,
    BORDER_RADIUS_M,
    FONT_SIZE_XXS,
    COLOR_NEUTRAL_LIGHT,
    COLOR_SUPORTE_SUCCESS,
    COLOR_SUPORTE_PRIMARY,
    BORDER_WIDTH_S,
    COLOR_NEUTRAL_LIGHTEST,
    COLOR_NEUTRAL_DARK,
    COLOR_SUPORTE_SUCCESS_LIGHTEST,
    COLOR_SUPORTE_PRIMARY_LIGHTEST
} from 'design-system';

export const TagDefault = styled.span`
    background: ${COLOR_NEUTRAL_LIGHTEST};
    border: ${BORDER_WIDTH_S}px ${COLOR_NEUTRAL_LIGHT} solid; 
    padding: ${SPACING_STACK_XXXS}px ${SPACING_STACK_XXS}px;
    margin: ${SPACING_STACK_XXXS}px;
    border-radius: ${BORDER_RADIUS_M}px;
    font-size: ${FONT_SIZE_XXS};
    color: ${COLOR_NEUTRAL_DARK};
`;

export const TagSuccess = styled(TagDefault)`
    background: ${COLOR_SUPORTE_SUCCESS_LIGHTEST};
    color: ${COLOR_SUPORTE_SUCCESS};
    border: ${BORDER_WIDTH_S}px ${COLOR_SUPORTE_SUCCESS} solid;
`;

export const TagPrimary = styled(TagDefault)`
    background: ${COLOR_SUPORTE_PRIMARY_LIGHTEST};
    color: ${COLOR_SUPORTE_PRIMARY};
    border: ${BORDER_WIDTH_S}px ${COLOR_SUPORTE_PRIMARY} solid;
`;