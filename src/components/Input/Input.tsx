import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
	const { colors } = useTheme();

	return <Container {...rest} placeholderTextColor={colors.gray_300} />;
};

export default Input;
