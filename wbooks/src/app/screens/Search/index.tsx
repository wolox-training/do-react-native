import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/state';
import { Book as BookInterface } from '@interfaces/book';
import ListBooks from '@app/components/ListBooks';

import EmptyFilter from './components/EmptyFilter';

function Search() {
  const filterSearch = useSelector<State, string>(state => state.book.filterSearch).trim();
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  const booksFilter = useMemo(
    () =>
      books.filter((book: BookInterface) => {
        return book.title.toLowerCase().includes(filterSearch.toLowerCase());
      }),
    [filterSearch, books]
  );
  const filterEmpty = filterSearch === '';
  return (
    <ListBooks
      books={filterEmpty ? [] : booksFilter}
      emptyListComponent={<EmptyFilter />}
      backgroundColorWhite={filterEmpty}
    />
  );
}
export default Search;
