import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}