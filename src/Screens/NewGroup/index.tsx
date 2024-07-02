import { useState } from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container, Icon, Content } from "./styles";
import { Hightlight } from "src/Components/Hightlight";
import { Header } from "src/Components/Header";
import { Button } from "src/Components/Buttom";
import { Input } from "src/Components/Input";

import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export function NewGroup() {

    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function HandlePressButton() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
            }

            await groupCreate(group);
            navigation.navigate('players', { group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possivel criar uma nova turma.')
                console.log(error)
            }
        }
    }

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
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    onPress={HandlePressButton}
                />
            </Content>

        </Container>
    );
}