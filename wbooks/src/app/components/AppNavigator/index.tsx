import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes, Titles } from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import COLORS from '@constants/colors';

import headerImage from './assets/bc_nav_bar.png';
import headerBackImage from './assets/ic_back.png';
import icLibraryActive from './assets/ToolBar/ic_library_active.png';
import icLibrary from './assets/ToolBar/ic_library.png';
import icWishlist from './assets/ToolBar/ic_wishlist.png';
import icWishlistActive from './assets/ToolBar/ic_wishlist_active.png';
import styles from './styles';

const Stack = createStackNavigator();
const tabBarIcon = createBottomTabNavigator();
const EmptyScreen = () => {
  return <SafeAreaView />;
};

const StackNavigator = () => {
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
      <Stack.Screen
        name={Routes.Library}
        component={Library}
        options={{
          title: Titles.Library
        }}
      />
      <Stack.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{
          title: Titles.BookDetail
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <tabBarIcon.Navigator
      initialRouteName={Routes.Library}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = null;
          switch (route.name) {
            case Routes.Library:
              iconName = focused ? icLibraryActive : icLibrary;
              break;
            case Routes.Wishlist:
              iconName = focused ? icWishlistActive : icWishlist;
              break;
            default:
              return null;
          }
          return <Image source={iconName} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: COLORS.cerulean,
        inactiveTintColor: COLORS.dustyGray
      }}>
      <tabBarIcon.Screen name={Routes.Library} component={StackNavigator} />
      <tabBarIcon.Screen name={Routes.Wishlist} component={EmptyScreen} />
    </tabBarIcon.Navigator>
  );
};

export default AppNavigator;
