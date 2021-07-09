import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import COLORS from '@constants/colors';

import headerImage from './assets/bc_nav_bar.png';
import headerBackImage from './assets/ic_back.png';
import icLibraryActive from './assets/ToolBar/ic_library_active.png';
import icLibrary from './assets/ToolBar/ic_library.png';
import styles from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TITLES = { BookDetail: 'BOOK DETAIL', Library: 'LIBRARY' };

/* const StackLibrary = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        headerBackTitleVisible: false,
        headerBackImage: () => <Image source={headerBackImage} />,
        headerLeftContainerStyle: styles.alignItemHeader
      }}>
      <Stack.Screen name={Routes.MainTab} component={Library} />
    </Stack.Navigator>
  );
};*/

const TapNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Library}
      tabBarOptions={{
        showLabel: true
      }}>
      <Tab.Screen
        name={Routes.Library}
        component={Library}
        options={{
          tabBarLabel: Routes.Library,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icLibraryActive : icLibrary} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MainTab}
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.headerBar
      }}>
      <Stack.Screen name={Routes.MainTab} component={TapNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{
          title: TITLES.BookDetail
        }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
