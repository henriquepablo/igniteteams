import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_600}; 
    padding: 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font_family.regular};
    font-size: ${({ theme }) => theme.font_size.xl}px;
    color: ${({ theme }) => theme.colors.white};
`;