import Button from '@components/Button';
import Header from '@components/Header';
import Input from '@components/Input/Input';
import Highlight from '@components/highlight';
import { Container, Content, Icon } from './styles';

const NewGroup: React.FC = () => {
	return (
		<Container>
			<Header showBackButton />

			<Content>
				<Icon />

				<Highlight
					title="Nova Turma"
					subtitle="Crie a turma para adicionar as pessoas."
				/>

				<Input placeholder="Nome da Turma" />

				<Button title="Criar" style={{ marginTop: 20 }} />
			</Content>
		</Container>
	);
};

export default NewGroup;
