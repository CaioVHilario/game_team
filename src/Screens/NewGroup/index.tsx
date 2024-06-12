import { Header } from "src/Components/Header";
import { Container, Icon, Content } from "./styles";
import { Hightlight } from "src/Components/Hightlight";
import { Button } from "src/Components/Buttom";
import { Input } from "src/Components/Input";



export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Hightlight
                    title="Nova turma"
                    subtitle="crie a sua turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                />
            </Content>

        </Container>
    );
}