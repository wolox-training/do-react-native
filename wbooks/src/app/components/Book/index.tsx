import React from 'react';
import { Text, View, Image } from 'react-native';

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
    <View>
      <Image
        source={book.imageUrl ? { uri: book.imageUrl } : require('@assets/img_book_placeholder.png')}
        resizeMode="contain"
      />
      <View>
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
      </View>
    </View>
  );
}
