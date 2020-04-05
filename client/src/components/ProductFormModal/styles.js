import styled from 'styled-components';
import { DeleteOutlined, BarcodeOutlined } from '@ant-design/icons';
import { 
    COLOR_NEUTRAL_BLACK,
    SPACING_STACK_XXXS,
    SPACING_STACK_XXS,
    SPACING_STACK_XS,
    FONT_SIZE_XS,
    COLOR_NEUTRAL_DARK,
    COLOR_NEUTRAL_LIGHTEST,
    COLOR_NEUTRAL_LIGHT,
    BORDER_WIDTH_S
} from 'design-system';

export const Input = styled.input`
    padding: 4px 11px;
    line-height: 1.5715;
    background-color: ${COLOR_NEUTRAL_LIGHTEST};
    border: ${BORDER_WIDTH_S}px solid ${COLOR_NEUTRAL_LIGHT};
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: ${COLOR_NEUTRAL_DARK};
`;

export const SmallInput = styled(Input)`
    width: 50%;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 10px 0px;
`;

export const Form = styled.form`
    text-align: left;
`;

export const TextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    padding: 4px 11px;
    line-height: 1.5715;
    background-color: ${COLOR_NEUTRAL_LIGHTEST};
    border: ${BORDER_WIDTH_S}px solid ${COLOR_NEUTRAL_LIGHT};
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: ${COLOR_NEUTRAL_DARK};
`;

export const Label = styled.label`
    color: ${COLOR_NEUTRAL_BLACK};
    margin-bottom: ${SPACING_STACK_XXXS}px;
    font-size: ${FONT_SIZE_XS};
`;

export const SerialCodeContainer = styled.div`
    border-top: ${BORDER_WIDTH_S}px solid ${COLOR_NEUTRAL_LIGHT};
    padding: 10px 0px;
    margin-top: 15px;
`;

export const SerialCodeGroup = styled.div`
    margin: ${SPACING_STACK_XS}px 0px;
`;

export const DeleteIcon = styled(DeleteOutlined)`
    color: ${COLOR_NEUTRAL_DARK};
`;

export const SerialCodeContent = styled.span`
    margin: ${SPACING_STACK_XXS}px;
`;

export const BarCodeIcon = styled(BarcodeOutlined)`
    font-size: ${FONT_SIZE_XS};
    margin-right: ${SPACING_STACK_XXXS}px;
`;