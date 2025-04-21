import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup() {

    const navigation = useNavigation();

    const handleNew = () => {
        navigation.navigate('players', {group: ''})
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
                />

                <Button 
                    title="Criar"
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}