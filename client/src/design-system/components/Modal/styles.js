import styled from 'styled-components';
import {
    BOX_SHADOW,
    SHADOW,
    SPACING_STACK_S,
    SPACING_STACK_XS,
    SPACING_STACK_XXS,
    BORDER_RADIUS_S,
    COLOR_NEUTRAL_LIGHT,
    COLOR_NEUTRAL_LIGHTEST,
    COLOR_NEUTRAL_DARK,
} from 'design-system';

import {
    ButtonPrimary as BtnPrimary,
    ButtonDefault as BtnDefault
} from 'design-system/components/Button';

function getSizeModal({ size }) {
    if(size === 'medium') {
        return '60vw';
    }

    if(size === 'large') {
        return '80vw';
    }

    return '40vw';
}

export const Container = styled.div`
    background: ${SHADOW};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: ${BOX_SHADOW};
    padding: ${SPACING_STACK_S}px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Content = styled.div`
    margin-top: ${SPACING_STACK_S}px;
    background: ${COLOR_NEUTRAL_LIGHTEST};
    width: ${getSizeModal};
    max-height: 80vh;
    box-shadow: ${BOX_SHADOW};
    border-radius: ${BORDER_RADIUS_S}px;
`;

export const ContentChildren = styled.div`
    padding: ${SPACING_STACK_S}px;
    max-height: 60vh;
    overflow-y: auto;
`;

export const ModalTitle = styled.div`
    padding: ${SPACING_STACK_XS}px ${SPACING_STACK_S}px ${SPACING_STACK_XS}px ${SPACING_STACK_S}px;
    text-align: left;
    border-bottom: 1px solid ${COLOR_NEUTRAL_LIGHT};
    color: ${COLOR_NEUTRAL_DARK}
`;

export const ModalFooter = styled.div`
    padding: ${SPACING_STACK_XS}px ${SPACING_STACK_S}px ${SPACING_STACK_XS}px ${SPACING_STACK_S}px;
    text-align: right;
    border-top: 1px solid ${COLOR_NEUTRAL_LIGHT};
`;

export const ButtonPrimary = styled(BtnPrimary)`
    margin-left: ${SPACING_STACK_XXS}px;
`;

export const ButtonDefault = styled(BtnDefault)``;