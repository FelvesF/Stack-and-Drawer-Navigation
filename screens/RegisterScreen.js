import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
      <Button
        title="Create Account"
        onPress={() => {
          Alert.alert('Successfully Registered');
          navigation.navigate('Login');
        }}
      />
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