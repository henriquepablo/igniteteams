import type React from 'react';
import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/highlight';

const Groups: React.FC = () => {
	return (
		<Container>
			<Header />
			<Highlight title='Turmas' subtitle='Jogue com  a sua turma'/>
		</Container>
	);
};

export default Groups;
