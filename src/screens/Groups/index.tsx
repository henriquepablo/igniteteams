import type React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/highlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
const Groups: React.FC = () => {

	const [ groups, setGroups ] = useState<string[]>([]);
	
	return (
		<Container>
			<Header />
			
			<Highlight title='Turmas' subtitle='Jogue com  a sua turma' />
			
			<FlatList 
				data={ groups }
				renderItem={({ item }) => (
					<GroupCard title={ item } />
				)}
				keyExtractor={ item => item }
			/>

		</Container>
	);
};

export default Groups;
