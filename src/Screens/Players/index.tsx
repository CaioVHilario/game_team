import { Header } from "src/Components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Hightlight } from "src/Components/Hightlight";
import { ButtonIcon } from "src/Components/ButtonIcon";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);

    return (
        <Container>
            <Header showBackButton />

            <Hightlight
                title="Nome da turma"
                subtitle="adicone a galera e separe os times"
            />

            <Form>

                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />



                <ButtonIcon icon="add" />

            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title="Time A"
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

        </Container>
    )
}