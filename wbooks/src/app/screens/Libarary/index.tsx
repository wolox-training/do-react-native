import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Book from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

export function Library() {
  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} renderItem={Book} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>
  );
}
