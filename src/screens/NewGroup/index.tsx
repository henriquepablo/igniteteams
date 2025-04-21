import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export default function NewGroup() {

    const navigation = useNavigation();
    const [group, setGroup] = useState<string>('');

    const handleNew = async () => {
        try {
            if (group.trim().length === 0) {
                return  Alert.alert('Novo Grupo', 'Informe o nome da turma.')
            }

            await groupCreate(group);
            navigation.navigate('players', {group: group})

        } catch(error) {
            if(error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            }
            else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
                console.log(error);
            }
        }
    }

    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                
                <Highlight 
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />

                <Input style={{marginBottom: 15}} 
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button 
                    title="Criar"
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}