import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import { Image, TouchableNativeFeedback } from 'react-native';
import COLORS from '@constants/colors';

import headerImage from './assets/bc_nav_bar.png';
import headerBackImage from './assets/ic_back.png';
import headerNotification from './assets/ic_notifications.png';
import headerSearch from './assets/ic_search.png';
import styles from './styles';

const Stack = createStackNavigator();
const TITLES = { bookDetail: 'BOOK DETAIL', library: 'LIBRARY' };
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Library}
      headerMode="screen"
      screenOptions={{
        headerBackground: () => <Image source={headerImage} style={styles.headerBar} resizeMode="stretch" />,
        headerTintColor: COLORS.white,
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen
        name={Routes.Library}
        component={Library}
        options={{
          title: TITLES.library,
          headerLeft: () => <Image source={headerNotification} style={styles.headerIcons} />,
          headerRight: () => <Image source={headerSearch} style={styles.headerIcons} />
        }}
      />
      <Stack.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={({ navigation }) => ({
          title: TITLES.bookDetail,
          headerLeft: () => (
            <TouchableNativeFeedback onPress={() => navigation.goBack()}>
              <Image source={headerBackImage} style={styles.headerIcons} />
            </TouchableNativeFeedback>
          )
        })}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
