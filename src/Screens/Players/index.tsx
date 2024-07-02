import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";
import { Header } from "src/Components/Header";
import { Button } from "src/Components/Buttom";
import { Loading } from "src/Components/Loading";
import { PlayerCard } from "src/Components/PlayerCard";
import { ListEmpty } from "src/Components/ListEmpty";
import { Hightlight } from "src/Components/Hightlight";
import { ButtonIcon } from "src/Components/ButtonIcon";

import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";

import { playerAddByGropu } from "@storage/players/playerAddByGroup";
import { playerGetByGroup } from "@storage/players/playersGetByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { playersGetByGroupByTeam } from "@storage/players/playersGetByGroupByTeam";

type RouteParams = {
    group: string;
}

export function Players() {
    const [isLoading, setIsLoading] = useState(true);
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const navigation = useNavigation();
    const routes = useRoute();
    const { group } = routes.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Novo Jogador', 'Informe o nome do jogador para adicionar.')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGropu(newPlayer, group);
            const players = await playerGetByGroup(group);

            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('')

            fetchPlayerByTeam();
            console.log(players)
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Jogador', error.message)
            } else {
                console.log(error);
                Alert.alert('Novo Jogador', 'Não foi possivel adicionar um novo jogador.')
            }
        }
    }

    async function fetchPlayerByTeam() {
        try {
            setIsLoading(true)

            const playerByTeam = await playersGetByGroupByTeam(group, team);

            setPlayers(playerByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.')
        } finally {
            setIsLoading(false);
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);

            fetchPlayerByTeam();

        } catch (error) {
            console.log(error)
            Alert.alert('Remover Pessoa', 'Não foi possivel remover essa pessoa.')
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups');
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel remover esta turma.')
        }
    }

    async function handleGroupRemove() {
        Alert.alert(
            'Remover Turma',
            'Deseja remover esta turma?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => groupRemove() }
            ]
        )
    }

    useEffect(() => {
        fetchPlayerByTeam()
    }, [team]);

    return (
        <Container>
            <Header showBackButton />

            <Hightlight
                title={group}
                subtitle="adicone a galera e separe os times"
            />

            <Form>

                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />



                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />

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

            {
                isLoading ? <Loading /> :


                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <PlayerCard
                                name={item.name}
                                onRemove={() => handlePlayerRemove(item.name)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() =>
                            <ListEmpty
                                message='Não há pessoas neste time'
                            />
                        }
                        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                    />

            }

            <Button
                title="Remover turma"
                type="SECONDARY"
                onPress={() => handleGroupRemove()}
            />

        </Container>
    )
}