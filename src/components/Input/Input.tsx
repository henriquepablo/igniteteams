import type { TextInputProps } from 'react-native';
import { Container } from './styles';

const Input: React.FC = ({ ...rest }: TextInputProps) => {
	return <Container {...rest} />;
};

export default Input;
