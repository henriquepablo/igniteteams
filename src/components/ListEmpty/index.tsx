import { Container, Message } from './styles';

type ListEmptyProps = {
	message: string;
};

const ListEmpty: React.FC<ListEmptyProps> = ({ message }) => {
	return (
		<Container>
			<Message>{message}</Message>
		</Container>
	);
};

export default ListEmpty;
