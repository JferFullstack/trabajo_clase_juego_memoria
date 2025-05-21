import { FlatList, TouchableOpacity, Text, StyleSheet, Alert, View } from 'react-native';
import React, { useRef } from 'react';
import { useJuegoContext } from '../Provider/JuegosProvider';

export default function CartasGrid() {
  const { sumarPartida, cartas } = useJuegoContext();
  const cartasSeleccionadas = useRef<number[]>([]);

  function seleccionarCarta(item: number) {
    cartasSeleccionadas.current.push(item);

    if (cartasSeleccionadas.current.length === 2) {
      if (cartasSeleccionadas.current[0] === cartasSeleccionadas.current[1]) {
        Alert.alert('Ganó la partida');
        sumarPartida({
          id: Date.now(),
          descripcion: 'Partida Ganada',
        });
      } else {
        Alert.alert('Partida Finalizada');
        sumarPartida({
          id: Date.now(),
          descripcion: 'Partida Perdida',
        });
      }
      cartasSeleccionadas.current = [];
    }
  }

  return (
    <FlatList
      data={cartas}
      keyExtractor={(_, i) => i.toString()}
      numColumns={4}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => seleccionarCarta(item)}>
          <Text style={styles.cardText}>S</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: { alignItems: 'center', marginTop: 24 },
  card: {
    width: 70,
    height: 90,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  cardText: { fontSize: 26, color: '#fff' },
});
