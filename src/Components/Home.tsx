import { View } from 'react-native';
import React from 'react';
import CartasGrid from './CartasGrid';
import ListaPartidas from './ListaPartidas';

export default function Home() {
  return (
    <View>
      <CartasGrid />
      <ListaPartidas />
    </View>
  );
}