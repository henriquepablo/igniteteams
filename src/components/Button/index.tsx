import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
}

export default function Button({ title, type = 'PRIMARY', ...rest } : ButtonProps) {
    return(
        <Container 
            type={type}
            {...rest}
        >
            <Title>
                {title}
            </Title> 
        </Container>
    )
}