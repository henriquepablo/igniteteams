import Header from '@components/Header';
import Highlight from '@components/highlight';
import { Container } from './style';

const Players: React.FC = () => {
	return (
		<Container>
			<Header showBackButton />

			<Highlight
				title="Nome da turma"
				subtitle="adicione a galera e separe os times"
			/>
		</Container>
	);
};

export default Players;
