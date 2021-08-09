import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';
import icSearchPlaceholder from './assets/ic_search_placeholder.png';

function HeaderSearchBar() {
  const [bookFilter, setBookFilter] = useState('');
  return (
    <View style={styles.container}>
      <Image source={icSearchPlaceholder} style={styles.image} />
      <TextInput value={bookFilter} onChangeText={text => setBookFilter(text)} style={styles.input} />
    </View>
  );
}
export default HeaderSearchBar;
