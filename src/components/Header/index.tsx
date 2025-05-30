import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

type HeaderProps = {
    showBackButton?: boolean;
}

export default function Header({ showBackButton = false }:HeaderProps) {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.navigate('groups');
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}