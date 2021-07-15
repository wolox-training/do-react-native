import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import COLORS from '@constants/colors';

import headerImage from './assets/bc_nav_bar.png';
// import headerBackImage from './assets/ic_back.png';
import icLibraryActive from './assets/ToolBar/ic_library_active.png';
import icLibrary from './assets/ToolBar/ic_library.png';
import icWishlist from './assets/ToolBar/ic_wishlist.png';
import icWishlistActive from './assets/ToolBar/ic_wishlist_active.png';
import styles from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return <SafeAreaView />;
};
const TITLES = {
  BookDetail: 'BOOK DETAIL',
  Library: 'LIBRARY',
  Wishlist: 'WISHLIST',
  AddNew: 'ADD NEW',
  Rentals: 'RENTALS',
  Settings: 'SETTINGS'
};

const StackBook = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        title: TITLES.Library
      }}>
      <Stack.Screen name={Routes.Library} component={Library} />
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

const StackWishList = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        title: TITLES.Wishlist
      }}>
      <Stack.Screen name={Routes.Wishlist} component={EmptyScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Library}
      tabBarOptions={{
        showLabel: true
      }}>
      <Tab.Screen
        name={Routes.Library}
        component={StackBook}
        options={{
          tabBarLabel: Routes.Library,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icLibraryActive : icLibrary} />;
          }
        }}
      />
      <Tab.Screen
        name={Routes.Wishlist}
        component={StackWishList}
        options={{
          tabBarLabel: Routes.Wishlist,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icWishlistActive : icWishlist} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

/* const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MainTab}
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
};*/
export default AppNavigator;
