import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book as BookInterface } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

function Library() {
  const renderItem = ({ item }: { item: BookInterface }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <SafeAreaView style={styles.containerView}>
      <FlatList
        data={BOOKS_MOCK}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
}
export default Library;
