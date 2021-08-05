import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@constants/routes';

import icSearch from './assets/ic_search.png';

function HeaderSearch() {
  const navigation = useNavigation();
  const handleOpenSearchBook = () => {
    navigation.navigate(Routes.Search);
  };
  return (
    <TouchableOpacity onPress={handleOpenSearchBook}>
      <Image source={icSearch} resizeMode="contain" />
    </TouchableOpacity>
  );
}
export default HeaderSearch;
