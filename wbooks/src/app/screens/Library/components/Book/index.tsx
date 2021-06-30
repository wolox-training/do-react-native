import React from 'react';
import { Text, View, Image } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';
import { Book as BookInterface } from '@interfaces/book';

import styles from './styles';

interface Props {
  book: BookInterface;
}

function Book({ book }: Props) {
  const { imageUrl, title, author } = book;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUrl ? { uri: imageUrl } : placeholder} resizeMode="stretch" />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}
export default Book;