import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

const Header: React.FC<Props> = ({showBackButton = false}) => {
    return (
        <Container>
            {
                showBackButton && (
                    <BackButton>
                        <BackIcon />
                    </BackButton>
                )
            }

            <Logo source={logoImg}/>
        </Container>
    )
};

export default Header;