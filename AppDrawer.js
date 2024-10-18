import 'react-native-gesture-handler';
import * as React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AppQuiz from './AppQuiz';
import AboutusScreen from './screens/AboutusScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="LOG OUT"
            onPress={() => {
              Alert.alert('LOGGED OUT');
              props.navigation.navigate('Login');
            }}
          />
          <DrawerItem
            label="Math Quiz"
            onPress={() => props.navigation.navigate('Math-Quiz')}
          />
          <DrawerItem
            label="About us"
            onPress={() => props.navigation.navigate('Aboutus')}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="App Quiz" component={AppQuiz} />
      <Drawer.Screen name="Aboutus" component={AboutusScreen} />
    </Drawer.Navigator>
  );
}