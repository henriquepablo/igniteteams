import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export default function NewGroup() {

    const navigation = useNavigation();
    const [group, setGroup] = useState<string>('');

    const handleNew = async () => {
        try {
            await groupCreate(group);
            navigation.navigate('players', {group: group})

        } catch(error) {
            console.log(error);
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