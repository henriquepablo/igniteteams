import Header from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useState, useRef } from "react";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import playersGetByGroupAndTeam from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import playerRemoveByGroup from "@storage/player/playerRemoveByGroup";

type RouteParams = {
    group: string;
}

export default function Players() {

    const [newPlayerName, setNewPlayerName] = useState<string>('');
    const [team, setTeam] = useState<string>('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerInputRef = useRef<TextInput>(null);

    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para adicionar.');
        }

        const newPlayer = {
            name: newPlayerName,
            team: team
        }

        try {
            await playerAddByGroup(newPlayer, group);
            newPlayerInputRef.current?.blur();
            setNewPlayerName('');

        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Nova Pessoa', error.message);
            }
            else {
                console.log(error);
                Alert.alert('Nova Pessoa','Não foi possível adicionar');
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        }
        catch(error) {
            console.log(error);
            Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time")
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert('Remover', 'Não foi possível remover a pessoa.');
        }
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team, handleAddPlayer]);

    return(
        <Container>
            <Header showBackButton/>

            <Highlight 
                title={group}
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    inputRef={newPlayerInputRef}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon icon="add" onPress={handleAddPlayer}/>
            </Form>

            <HeaderList>
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)} 
                        />
                    )}
                    horizontal
                    scrollEnabled={false}
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <PlayerCard 
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Não há pessoas nesse time"
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />

            <Button 
                title="Remover Turma"
                type="SECONDARY"
            />
        </Container>
    )
}