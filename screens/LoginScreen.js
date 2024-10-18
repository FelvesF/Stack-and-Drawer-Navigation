import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back!</Text>
      <Button
        title="Log in Now"
        onPress={() => {
          Alert.alert('Successfully Logged in');
          navigation.navigate('AboutDrawer');
        }}
      />
      <Button
        title="Don't have an Account?"
        onPress={() => navigation.navigate('Register')}
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