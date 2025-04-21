import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function NewGroup() {

    const navigation = useNavigation();
    const [group, setGroup] = useState<string>('');

    const handleNew = () => {
        navigation.navigate('players', {group: group})
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