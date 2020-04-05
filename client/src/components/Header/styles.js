import styled from 'styled-components';
import {
    SPACING_STACK_XS,
    COLOR_NEUTRAL_LIGHT,
    COLOR_NEUTRAL_LIGHTEST,
    BORDER_WIDTH_S,
    COLOR_SUPORTE_PRIMARY
} from 'design-system'

export const HeaderContainer = styled.div`
    background: ${COLOR_NEUTRAL_LIGHT};
    display: flex;
    justify-content: center;
    border-bottom: ${BORDER_WIDTH_S}px solid #FFF;
    & a {
        padding: ${SPACING_STACK_XS}px 0px;
        text-decoration: none;
    }
`;

export const MenuItem = styled.span`
    padding: ${SPACING_STACK_XS}px;
    color: ${COLOR_SUPORTE_PRIMARY};
    &:hover {
        background: ${COLOR_NEUTRAL_LIGHTEST};
        cursor: pointer;
    }
    
`;