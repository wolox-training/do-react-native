import React from 'react';
import { Image, SafeAreaView } from 'react-native';
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
import icWishlist from './assets/ToolBar/ic_wishlist.png';
import icWishlistActive from './assets/ToolBar/ic_wishlist_active.png';
import icAddNew from './assets/ToolBar/ic_add_new.png';
import icAddNewActive from './assets/ToolBar/ic_add_new_active.png';
import icMyrRentals from './assets/ToolBar/ic_myrentals.png';
import icMyrRentalsActive from './assets/ToolBar/ic_myrentals_active.png';
import icSettings from './assets/ToolBar/ic_settings.png';
import icSettingsActive from './assets/ToolBar/ic_settings_active.png';
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

const StackLibrary = () => {
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

const StackAddNew = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        title: TITLES.AddNew
      }}>
      <Stack.Screen name={Routes.AddNew} component={EmptyScreen} />
    </Stack.Navigator>
  );
};
const StackRentals = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        title: TITLES.Rentals
      }}>
      <Stack.Screen name={Routes.Rentals} component={EmptyScreen} />
    </Stack.Navigator>
  );
};
const StackSetting = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={headerImage} style={styles.headerImageBar} resizeMode="stretch" />
        ),
        headerTintColor: COLORS.white,
        headerTitleStyle: [styles.headerTitle, styles.alignItemHeader],
        headerStyle: styles.headerBar,
        title: TITLES.Settings
      }}>
      <Stack.Screen name={Routes.Settings} component={EmptyScreen} />
    </Stack.Navigator>
  );
};

const TapNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Library}
      tabBarOptions={{
        showLabel: true
      }}>
      <Tab.Screen
        name={Routes.Library}
        component={StackLibrary}
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
      <Tab.Screen
        name={Routes.AddNew}
        component={StackAddNew}
        options={{
          tabBarLabel: Routes.AddNew,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icAddNewActive : icAddNew} />;
          }
        }}
      />
      <Tab.Screen
        name={Routes.Rentals}
        component={StackRentals}
        options={{
          tabBarLabel: Routes.Rentals,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icMyrRentalsActive : icMyrRentals} />;
          }
        }}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={StackSetting}
        options={{
          tabBarLabel: Routes.Settings,
          tabBarIcon: ({ focused }) => {
            return <Image source={focused ? icSettingsActive : icSettings} />;
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
};
export default AppNavigator;
