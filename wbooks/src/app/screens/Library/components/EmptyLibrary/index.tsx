import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function EmptyLibrary() {
  return (
    <View>
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subTitle}>Find your favorite writers and books!</Text>
    </View>
  );
}
export default EmptyLibrary;
