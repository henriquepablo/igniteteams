import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.colors.gray_700};
    color: ${theme.colors.white};
    border-radius: 6px;
    padding: 16px;
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
`;
