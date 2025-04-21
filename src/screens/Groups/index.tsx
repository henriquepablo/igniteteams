import Highlight from '@components/Highlight';
import { Container } from './styles';
import Header from '@components/Header';
import GroupCard from '@components/GroupCard';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export default function Groups() {
  const [ groups, setGroups ] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    }
    catch(error) {
      console.log(error);
    } 
  }

  function handleOpenGroup(nameGroup: string) {
    navigation.navigate('players', { group: nameGroup })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({item}) =>  (
          <GroupCard title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Cadastre a primeira turma'/>}
      />

      <Button title='Criar nova turma' onPress={handleNewGroup}/>
    </Container>
  );
}

