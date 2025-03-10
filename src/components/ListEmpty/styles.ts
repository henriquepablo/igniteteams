import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_300};
`;
