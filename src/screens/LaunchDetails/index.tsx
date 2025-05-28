import React from 'react';
import { launches } from '@/src/data/launches';
import { Header } from '@/src/components/Header';
import { HighLight } from '@/src/components/HighLight';
import { useRoute, RouteProp } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Container, Section, Label, Value, Item } from './styles';

type LaunchDetailsRouteProp = RouteProp<Record<string, { launchId: string }>, string>;

export function LaunchDetails() {
  const route = useRoute<LaunchDetailsRouteProp>();
  const { launchId } = route.params;
  const launch = launches.find(l => l.id === launchId);

  if (!launch) {
    return (
      <Container>
        <Header showBackButton />
        <HighLight title="Erro" subTitle="Lançamento não encontrado." />
      </Container>
    );
  }

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={launch.name} subTitle="Detalhes do Lançamento" />
      <Section>
        <Label>Gráfico de Altitude:</Label>
        <LineChart
          data={{
            labels: launch.positions.map((pos) => `${pos.time}s`),
            datasets: [
              {
                data: launch.positions.map((pos) => pos.altitude),
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={180}
          yAxisSuffix=" m"
          chartConfig={{
            backgroundColor: '#202024',
            backgroundGradientFrom: '#202024',
            backgroundGradientTo: '#202024',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 179, 126, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(196, 196, 204, ${opacity})`,
            style: { borderRadius: 12 },
            propsForDots: { r: '4', strokeWidth: '2', stroke: '#00B37E' },
          }}
          bezier
          style={{ marginVertical: 8, borderRadius: 12 }}
        />
      </Section>
      <Section>
        <Label>Volume d'água:</Label>
        <Value>{launch.waterVolume} L</Value>
        <Label>Peso do foguete:</Label>
        <Value>{launch.rocketWeight} kg</Value>
        <Label>Pressão:</Label>
        <Value>{launch.pressure} bar</Value>
        <Label>Ângulo de lançamento:</Label>
        <Value>{launch.angle}°</Value>
      </Section>
      <Section>
        <Label>Posições e Altitudes:</Label>
        {launch.positions.map((pos, idx) => (
          <Item key={idx}>t={pos.time}s: <Value>{pos.altitude} m</Value></Item>
        ))}
      </Section>
      <Section>
        <Label>Velocidades (m/s):</Label>
        <Item><Value>{launch.velocities.join(', ')}</Value></Item>
      </Section>
      <Section>
        <Label>Acelerações (m/s²):</Label>
        <Item><Value>{launch.accelerations.join(', ')}</Value></Item>
      </Section>
    </Container>
  );
}
