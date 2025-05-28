import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { Header } from '@/src/components/Header';
import { HighLight } from '@/src/components/HighLight';
import { GroupCard } from '@/src/components/GroupCard';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { launches } from '@/src/data/launches';

export function Home() {
  const [launchList, setLaunchList] = useState(launches);
  const navigation = useNavigation();

  function handleOpenLaunch(launchId: string) {
    navigation.navigate('LaunchDetails', { launchId });
  }

  return (
    <Container>
      <Header showBackButton={false} />
      <HighLight
        title="Lançamentos de Foguete"
        subTitle="Visualize os dados dos lançamentos"
      />
      <FlatList
        data={launchList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupCard
            title={item.name}
            onPress={() => handleOpenLaunch(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty text="Nenhum lançamento disponível." />
        )}
      />
      <Button
        tittle="Novo Lançamento"
        onPress={() => alert('Funcionalidade em breve!')}
      />
    </Container>
  );
}

