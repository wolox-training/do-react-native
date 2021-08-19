import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Book as BookInterface } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

interface Props {
  books: BookInterface[];
  emptyListComponent?: JSX.Element;
}

function ListBooks({ books, emptyListComponent }: Props) {
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.flatList}
      ListEmptyComponent={emptyListComponent}
    />
  );
}
export default ListBooks;
