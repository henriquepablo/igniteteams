import Button from '@components/Button';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import ListEmpty from '@components/ListEmpty';
import Highlight from '@components/highlight';
import type React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

const Groups: React.FC = () => {
	const [groups, setGroups] = useState<string[]>([]);

	return (
		<Container>
			<Header />

			<Highlight title="Turmas" subtitle="Jogue com  a sua turma" />

			<FlatList
				data={groups}
				renderItem={({ item }) => <GroupCard title={item} />}
				keyExtractor={(item) => item}
				contentContainerStyle={groups.length === 0 && { flex: 1 }}
				ListEmptyComponent={
					<ListEmpty message="Nenhuma turma foi registrada." />
				}
			/>

			<Button title="Criar nova turma" />
		</Container>
	);
};

export default Groups;
