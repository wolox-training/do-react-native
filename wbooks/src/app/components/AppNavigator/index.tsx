import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import COLORS from '@constants/colors';

import headerImage from './assets/bc_nav_bar.png';
import headerBackImage from './assets/ic_back.png';
import styles from './styles';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const TITLES = { BookDetail: 'BOOK DETAIL', Library: 'LIBRARY' };

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Library}
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.headerBar
      }}>
      <Stack.Screen
        name={Routes.Library}
        component={Library}
        options={{
          title: TITLES.Library
        }}
      />
      <Stack.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{
          title: TITLES.BookDetail,
          headerBackTitleVisible: false,
          headerBackImage: () => <Image source={headerBackImage} style={styles.headerIcons} />
        }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
