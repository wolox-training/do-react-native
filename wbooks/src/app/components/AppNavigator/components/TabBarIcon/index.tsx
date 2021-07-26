import React from 'react';
import { Image } from 'react-native';
import { Routes } from '@constants/routes';

import icLibraryActive from './assets/ic_library_active.png';
import icLibrary from './assets/ic_library.png';
import icWishlist from './assets/ic_wishlist.png';
import icWishlistActive from './assets/ic_wishlist_active.png';

interface Props {
  route: string;
  focused: boolean;
}

function TabBarIcon({ route, focused }: Props) {
  let iconName = null;
  switch (route) {
    case Routes.Library:
      iconName = focused ? icLibraryActive : icLibrary;
      break;
    case Routes.Wishlist:
      iconName = focused ? icWishlistActive : icWishlist;
      break;
    default:
      return null;
  }
  return <Image source={iconName} resizeMode="contain" />;
}
export default TabBarIcon;
