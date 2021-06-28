import React from 'react';
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';
import { Book as BookInterfaces } from '@interfaces/index';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  book: BookInterfaces;
}

function Book({ book }: Props) {
  const { imageUrl, title, author } = book;
  const navigation = useNavigation();
  const titleWithoutSpaces = title.replace(/\s/, '');
  function handleOpenBookDetail() {
    navigation.navigate(Routes.bookDetailListRoute, { book });
  }
  return (
    <TouchableNativeFeedback onPress={handleOpenBookDetail}>
      <View style={styles.container}>
        <Image
          style={styles.imagen}
          source={imageUrl ? { uri: imageUrl as string } : placeholder}
          resizeMode="contain"
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
