import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import { Image } from 'react-native';

import headerBar from './assets/bc_nav_bar.png';
import styles from './styles';

const Stack = createStackNavigator();
const TITLES = { bookDetail: 'BOOK DETAIL' };
const header = () => <Image source={headerBar} style={styles.headerBar} resizeMode="stretch" />;
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.libraryListRoute}
      headerMode="screen"
      screenOptions={{
        headerBackground: header,
        headerTitleStyle: styles.title
      }}>
      <Stack.Screen name={Routes.libraryListRoute} component={Library} />
      <Stack.Screen
        name={Routes.bookDetailListRoute}
        component={BookDetail}
        options={{ title: TITLES.bookDetail }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
