import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Book as BookInterface } from '@interfaces/book';
import { State } from '@interfaces/state';
import BookAction from '@redux/book/action';
import { Routes } from '@constants/routes';

import Book from './components/Book';
import styles from './styles';
import EmptyLibrary from './components/EmptyLibrary';

function Library() {
  const dispatch = useDispatch();
  const route = useRoute();
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  const booksFilters: BookInterface[] = [];
  useEffect(() => {
    dispatch(BookAction.getBooks());
  }, [dispatch]);
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <SafeAreaView style={styles.containerView}>
      <FlatList
        data={route.name === Routes.Search ? booksFilters : books}
        renderItem={renderItem}
        ListEmptyComponent={EmptyLibrary}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
}
export default Library;
