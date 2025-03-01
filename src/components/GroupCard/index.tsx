import type { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
    title: string;
};
const GroupCard: React.FC<GroupCardProps> = ({ title, ...rest }) => {
    return(
        <Container {...rest}>
            <Icon />
            <Title>
                { title }
            </Title>
        </Container>
    );
};

export default GroupCard;