import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book as BookInterface } from '@interfaces/book';
import { State } from '@interfaces/state';
import BookAction from '@redux/book/action';
import ListBooks from '@components/ListBooks';

import styles from './styles';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  useEffect(() => {
    dispatch(BookAction.getBooks());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.containerView}>
      <ListBooks books={books} />
    </SafeAreaView>
  );
}
export default Library;
