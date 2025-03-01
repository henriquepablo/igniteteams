import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray_600};
`;

export const LoaingIndicator = styled.ActivityIndicator.attrs(() => ({
	color: theme.colors.green_700,
}))``;
