import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useJuegoContext } from '../Provider/JuegosProvider';

export default function ListaPartidas() {
  const { cantidadPartidas } = useJuegoContext();

  return (
    <FlatList
      data={cantidadPartidas}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardText2}>Partida #{item.id}</Text>
          <Text style={styles.cardSubText}>Resultado: {item.descripcion}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 24,
  },
  card: {
    width: 150,
    height: 90,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  cardText2: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
