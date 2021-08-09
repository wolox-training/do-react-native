import React from 'react';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';
import icSearchPlaceholder from './assets/ic_search_placeholder.png';

function HeaderSearchBar() {
  return (
    <View style={styles.container}>
      <Image source={icSearchPlaceholder} style={styles.imagen} />
      <TextInput />
    </View>
  );
}
export default HeaderSearchBar;
