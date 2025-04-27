import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "@theme/index";
import React from "react";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export default function Input({inputRef, ...rest}: Props) {
    return (
        <Container ref={inputRef}  {...rest} placeholderTextColor={theme.COLORS.GRAY_300}/>
    )
}