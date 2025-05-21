import React from 'react';
import JuegosProvider from './src/Provider/JuegosProvider';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator';

export default function App() {
  return (
    <JuegosProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </JuegosProvider>
  );
}
