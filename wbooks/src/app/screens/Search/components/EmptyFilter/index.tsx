import React from 'react';
import { View, Text, Image } from 'react-native';
import icSearchPlaceholder from '@assets/ic_search_placeholder.png';

import styles from './styles';

function EmptyFilter() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icSearchPlaceholder} resizeMode="contain" />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subTitle}>Find your favorite writers and books!</Text>
    </View>
  );
}
export default EmptyFilter;
