import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../Components/Home';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} />
    </Stack.Navigator>
  );
}
