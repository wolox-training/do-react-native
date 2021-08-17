import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/state';
import { Book as BookInterface } from '@interfaces/book';
import ListBooks from '@components/ListBooks';

import EmptyFilter from './components/EmptyFilter';
import styles from './styles';

function Search() {
  const filterSearch = useSelector<State, string>(state => state.book.filterSearch);
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  const booksFilter = useMemo(
    () =>
      books.filter((book: BookInterface) => {
        return book.title.toLowerCase().includes(filterSearch.toLowerCase());
      }),
    [filterSearch, books]
  );
  const searchEmpty = filterSearch === '';
  const filterEmpty = booksFilter.length === 0;
  return (
    <SafeAreaView style={[styles.containerView, (searchEmpty || filterEmpty) && styles.backgroundColorWhite]}>
      <ListBooks
        books={searchEmpty ? [] : booksFilter}
        emptyListComponent={<EmptyFilter empty={filterEmpty} />}
      />
    </SafeAreaView>
  );
}
export default Search;
