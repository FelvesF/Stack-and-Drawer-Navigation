import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdditionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Addition Screen</Text>
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