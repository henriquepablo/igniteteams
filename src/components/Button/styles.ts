import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type props = {
	type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.colors.green_700 : theme.colors.red_dark)};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.font_size.md}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font_family.bold};
`;
