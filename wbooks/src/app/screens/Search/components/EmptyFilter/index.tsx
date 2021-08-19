import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import icSearchPlaceholder from './assets/ic_search_placeholder.png';

interface Props {
  empty: boolean;
}
const INITIAL_SUBTITLE = 'Find your favorite writers and books!';
const INITIAL_TITLE = 'Search in Wbooks';
const DO_NOT_FOUND = 'Search Do Not Found';
function EmptyFilter({ empty }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icSearchPlaceholder} resizeMode="contain" />
      <Text style={styles.title}>{empty ? DO_NOT_FOUND : INITIAL_TITLE}</Text>
      <Text style={styles.subTitle}>{empty ? '' : INITIAL_SUBTITLE}</Text>
    </View>
  );
}
export default EmptyFilter;
