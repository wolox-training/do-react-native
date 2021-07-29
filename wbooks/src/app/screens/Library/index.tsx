import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book as BookInterface } from '@interfaces/book';
import { State } from '@interfaces/state';
import BookAction from '@redux/book/action';
import Config from 'react-native-config';
import Reactotron from '@config/reactotronConfig';

import Book from './components/Book';
import styles from './styles';

function Library() {
  const secretVariable = Config.SECRET_VARIABLE;
  Reactotron.display({
    name: 'SECRET_VARIABLE',
    value: secretVariable
  });
  const dispatch = useDispatch();
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  useEffect(() => {
    dispatch(BookAction.getBooks());
  }, [dispatch]);
  const renderItem: ListRenderItem<BookInterface> = ({ item }) => <Book book={item} />;
  const keyExtractor = (item: BookInterface) => item.id.toString();
  return (
    <SafeAreaView style={styles.containerView}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
}
export default Library;
