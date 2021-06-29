import React from 'react';
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';
import { useNavigation } from '@react-navigation/native';
import { Book as BookInterface } from '@interfaces/book';

import styles from './styles';

interface Props {
  book: BookInterface;
}

function Book({ book }: Props) {
  const { imageUrl, title, author } = book;
  const navigation = useNavigation();
  const titleWithoutSpaces = title.replace(/\s/, '');
  function handleOpenBookDetail() {
    navigation.navigate('BookDetail', { book });
  }
  return (
    <TouchableNativeFeedback onPress={handleOpenBookDetail}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={imageUrl ? { uri: imageUrl } : placeholder}
          resizeMode="stretch"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{titleWithoutSpaces.trim()}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
export default Book;
