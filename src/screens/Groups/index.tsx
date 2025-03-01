import type React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/highlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
import ListEmpty from '@components/ListEmpty';

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
				contentContainerStyle={groups.length === 0 && { flex: 1 }}
				ListEmptyComponent={
					<ListEmpty message='Nenhuma turma foi registrada.'/>
				}
			/>

		</Container>
	);
};

export default Groups;
