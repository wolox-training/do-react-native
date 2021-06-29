import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.libraryListRoute} headerMode="screen">
      <Stack.Screen name={Routes.libraryListRoute} component={Library} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.bookDetailListRoute} component={BookDetail} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
