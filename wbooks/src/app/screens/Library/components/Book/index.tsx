import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import placeholder from '@assets/img_book_placeholder.png';
import { Book as BookInterface } from '@interfaces/book';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  book: BookInterface;
}

function Book({ book }: Props) {
  const { imageUrl, title, author } = book;
  const navigation = useNavigation();
  const handleOpenBookDetail = () => {
    navigation.navigate(Routes.BookDetail, { book });
  };
  return (
    <TouchableOpacity onPress={handleOpenBookDetail} style={styles.container}>
      <Image style={styles.image} source={imageUrl ? { uri: imageUrl } : placeholder} resizeMode="stretch" />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default Book;
