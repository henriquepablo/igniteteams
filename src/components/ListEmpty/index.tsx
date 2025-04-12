import { Container, Message } from "./sytles";

type ListEmptyProps = {
    message: string
}

export default function ListEmpty({ message } : ListEmptyProps) {
    return (
        <Container>
            <Message>
                { message }
            </Message>
        </Container>
    )
}