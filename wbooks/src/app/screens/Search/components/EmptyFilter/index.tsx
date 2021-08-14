import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import icSearchPlaceholder from './assets/ic_search_placeholder.png';

interface Props {
  empty: boolean;
}
function EmptyFilter({ empty }: Props) {
  const initialSubtitle = 'Find your favorite writers and books!';
  const initialTitle = 'Search in Wbooks';
  const doNotFound = 'Search Do Not Found';
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icSearchPlaceholder} resizeMode="contain" />
      <Text style={styles.title}>{empty ? doNotFound : initialTitle}</Text>
      <Text style={styles.subTitle}>{empty ? '' : initialSubtitle}</Text>
    </View>
  );
}
export default EmptyFilter;
