import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface Props {
  book: Book;
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

function Book({ book }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={book.imageUrl ? { uri: book.imageUrl } : require('@assets/img_book_placeholder.png')}
        resizeMode="contain"
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </View>
  );
}
