import { TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "@theme/index";

type Props = TextInputProps & {}

export default function Input({...rest}: Props) {
    return (
        <Container {...rest} placeholderTextColor={theme.COLORS.GRAY_300}/>
    )
}