import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Container } from './styles';
import { Hightlight } from 'src/Components/Hightlight';
import { GroupCard } from 'src/Components/GroupCard';
import { ListEmpty } from 'src/Components/ListEmpty';
import { Loading } from 'src/Components/Loading';
import { Header } from 'src/Components/Header';
import { Button } from 'src/Components/Buttom';
import { groupGetAll } from '@storage/group/groupGetAll';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  async function fetchGroup() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroup();
  }, []))

  return (
    <Container>
      <Header />
      <Hightlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />
      {
        isLoading ? <Loading /> :

          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() =>
              <ListEmpty
                message='Que tal cadastrar a primeira turma'
              />
            }
            showsVerticalScrollIndicator={false}
          />
      }

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}
