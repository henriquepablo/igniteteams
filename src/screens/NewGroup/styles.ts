import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.gray_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(() => ({
	size: 44,
	color: theme.colors.green_700,
}))`
    align-self: center;
`;
