import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { Book as BookInterface } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

interface Props {
  books: BookInterface[];
  emptyListComponent?: JSX.Element | null;
  backgroundColorWhite?: boolean | null;
}

function ListBooks({ books, emptyListComponent, backgroundColorWhite }: Props) {
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <SafeAreaView style={[styles.containerView, backgroundColorWhite && styles.backgroundColorWhite]}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
        ListEmptyComponent={emptyListComponent}
      />
    </SafeAreaView>
  );
}
export default ListBooks;
