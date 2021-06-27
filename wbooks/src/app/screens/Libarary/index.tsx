import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import Book from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function Library() {
  return (
    <SafeAreaView>
      <FlatList
        data={BOOKS_MOCK}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Book book={item} />}
        ListFooterComponent={() => <View />}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}
export default Library;
