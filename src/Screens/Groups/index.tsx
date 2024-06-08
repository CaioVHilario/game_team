import { Header } from 'src/Components/Header';
import { Container } from './styles';
import { Hightlight } from 'src/Components/Hightlight';
import { GroupCard } from 'src/Components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight 
        title='Turmas' 
        subtitle='Jogue com sua turma'
      />

      <GroupCard title='Galera do  Ignite'/>
    </Container>
  );
}
