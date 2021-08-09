import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import icSearchPlaceholder from './assets/ic_search_placeholder.png';

function HeaderSearchBar() {
  const [bookFilter, setBookFilter] = useState('');
  const handleClearFilter = () => {
    setBookFilter('');
  };
  return (
    <View style={styles.container}>
      <Image source={icSearchPlaceholder} style={styles.image} />
      <TextInput value={bookFilter} onChangeText={text => setBookFilter(text)} style={styles.input} />
      <TouchableOpacity onPress={handleClearFilter} disabled={true}>
        <Image source={icSearchPlaceholder} resizeMode="contain" style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
export default HeaderSearchBar;
