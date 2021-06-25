import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Book from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

function Library() {
  return (
    <SafeAreaView>
      <FlatList
        data={BOOKS_MOCK}
        renderItem={({ item }) => <Book book={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
export default Library;
