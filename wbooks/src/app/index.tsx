/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@components/AppNavigator';
import COLORS from '@constants/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.cerulean} translucent barStyle="light-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
