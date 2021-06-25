import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface Props {
  item: Book;
}
interface Book {
  id: Number;
  author: String;
  title: String;
  genre: String;
  publisher: String;
  year: String;
  imageUrl: String | null;
}

function Book({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={item.imageUrl ? { uri: item.imageUrl } : require('@assets/img_book_placeholder.png')}
        resizeMode="contain"
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </View>
  );
}
export default Book;
