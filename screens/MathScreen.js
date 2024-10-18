import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MathScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Quiz</Text>
      <Button title="Go to Addition" onPress={() => navigation.navigate('Addition')} />
      <Button title="Go to Subtraction" onPress={() => navigation.navigate('Subtraction')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});