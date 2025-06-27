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
import { BleManager } from 'react-native-ble-plx';

export function Home() {
  const [launchList, setLaunchList] = useState(launches);
  const navigation = useNavigation();
  const bleManeger = new BleManager(); // Lógica do Bluetooth

  function handleOpenLaunch(launchId: string) {
    navigation.navigate('LaunchDetails', { launchId });
  }


  //Função que faz o scan dos dispositivos Bluetooth 


    async function scanBlu(){
        //Aqui inicia-se o scan dos dispositivos Bluetooth 

          bleManeger.startDeviceScan(null, null,(error, device) => {

              if (error){
                  alert('Erro ao buscar dispositivos Bluetooth');

                return;
              }
              if(device){
                  // Preciso iplementar aqui a lógica de tratamento do dispositivo encontrado
                    console.log('Dispositivo econtrado:', device.name);
                    //bleManager.stopDeviceScan();// Para o scan, Caso eu precise
              }

          });


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
        title="Novo Lançamento"
        onPress={scanBlu}
      />
    </Container>
  );
}

