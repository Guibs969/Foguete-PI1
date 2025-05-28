// Dados fictícios de lançamentos de foguete
export const launches = [
  {
    id: '1',
    name: 'Lançamento 1',
    waterVolume: 1.5, // litros
    rocketWeight: 0.8, // kg
    pressure: 5.2, // bar
    angle: 45, // graus
    positions: [
      { time: 0, altitude: 0 },
      { time: 1, altitude: 10 },
      { time: 2, altitude: 18 },
      { time: 3, altitude: 24 },
      { time: 4, altitude: 27 },
      { time: 5, altitude: 25 },
    ],
    velocities: [0, 12, 15, 10, 5, 0], // m/s
    accelerations: [12, 3, -5, -5, -5, 0], // m/s²
  },
  {
    id: '2',
    name: 'Lançamento 2',
    waterVolume: 2.0,
    rocketWeight: 1.0,
    pressure: 6.0,
    angle: 50,
    positions: [
      { time: 0, altitude: 0 },
      { time: 1, altitude: 12 },
      { time: 2, altitude: 22 },
      { time: 3, altitude: 30 },
      { time: 4, altitude: 33 },
      { time: 5, altitude: 30 },
    ],
    velocities: [0, 14, 16, 11, 4, 0],
    accelerations: [14, 2, -5, -7, -4, 0],
  },
];
