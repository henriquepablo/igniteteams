import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;

`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${ theme.font_size.xl}px;
    font-family: ${ theme.font_family.bold};
    color: ${ theme.colors.white };
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${ theme.font_size.md}px;
    font-family: ${ theme.font_family.regular};
    color: ${ theme.colors.gray_300 };
`;
