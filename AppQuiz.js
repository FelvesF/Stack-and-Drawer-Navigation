import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MathScreen from './screens/MathScreen';
import AdditionScreen from './screens/AdditionScreen';
import SubtractionScreen from './screens/SubtractionScreen';

const Stack = createNativeStackNavigator();

export default function AppQuiz() {
  return (
    <Stack.Navigator initialRouteName="Math-Quiz">
      <Stack.Screen name="Math-Quiz" component={MathScreen} options={{ headerTitle: '' }} />
      <Stack.Screen name="Addition" component={AdditionScreen} options={{ headerTitle: '' }} />
      <Stack.Screen name="Subtraction" component={SubtractionScreen} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
}