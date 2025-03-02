import type { TouchableOpacityProps } from 'react-native';
import { type ButtonTypeStyleProps, Container, Title } from './styles';

type ButtonProps = TouchableOpacityProps & {
	title: string;
	type?: ButtonTypeStyleProps;
};

const Button: React.FC<ButtonProps> = ({
	title,
	type = 'PRIMARY',
	...rest
}) => {
	return (
		<Container type={type} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
};

export default Button;
