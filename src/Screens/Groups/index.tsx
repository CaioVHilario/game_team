import { useState } from 'react';
import { Header } from 'src/Components/Header';
import { Container } from './styles';
import { Hightlight } from 'src/Components/Hightlight';
import { GroupCard } from 'src/Components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from 'src/Components/ListEmpty';
import { Button } from 'src/Components/Buttom';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Hightlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() =>
          <ListEmpty
            message='Que tal cadastrar a primeira turma'
          />
        }
      />

      <Button
        title='Criar nova turma'
      />

    </Container>
  );
}
