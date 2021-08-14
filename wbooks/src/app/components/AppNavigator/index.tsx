import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes, Titles } from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import Empty from '@screens/Empty';
import COLORS from '@constants/colors';
import Search from '@screens/Search';

import headerImage from './assets/bc_nav_bar.png';
import headerBackImage from './assets/ic_back.png';
import styles from './styles';
import TabBarIcon from './components/TabBarIcon';
import HeaderSearchButton from './components/HeaderSearchButton';
import FilterInput from './components/FilterInput';

const Stack = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const LibraryStack = () => {
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
        headerBackImage: () => <Image source={headerBackImage} resizeMode="contain" />,
        headerLeftContainerStyle: styles.alignItemHeader
      }}>
      <Stack.Screen
        name={Routes.Library}
        component={Library}
        options={{
          title: Titles.Library,
          headerRight: HeaderSearchButton,
          headerRightContainerStyle: styles.alignItemHeader
        }}
      />
      <Stack.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{
          title: Titles.BookDetail
        }}
      />
      <Stack.Screen
        name={Routes.Search}
        component={Search}
        options={{
          headerTitle: FilterInput,
          headerTitleContainerStyle: styles.filterInput
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName={Routes.Library}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabBarIcon route={route.name} focused={focused} />
      })}
      tabBarOptions={{
        activeTintColor: COLORS.cerulean,
        inactiveTintColor: COLORS.dustyGray,
        labelStyle: styles.tabLabel
      }}>
      <TabNavigator.Screen name={Routes.Library} component={LibraryStack} />
      <TabNavigator.Screen name={Routes.Wishlist} component={Empty} />
    </TabNavigator.Navigator>
  );
};

export default AppNavigator;
