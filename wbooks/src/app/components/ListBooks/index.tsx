import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Book as BookInterface } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

interface Props {
  books: BookInterface[];
}

function ListBooks({ books }: Props) {
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.flatList}
    />
  );
}
export default ListBooks;
