import React from 'react';
import { Text, View, Image } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';
import { BookMock } from '@interfaces/index';

import styles from './styles';

interface Props {
  book: BookMock;
}

function Book({ book }: Props) {
  const { imageUrl, title, author } = book;
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={imageUrl ? { uri: imageUrl as string } : placeholder}
        resizeMode="stretch"
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}
export default Book;
