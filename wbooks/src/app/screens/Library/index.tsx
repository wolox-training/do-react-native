import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book as BookInterface } from '@interfaces/book';
import { State } from '@interfaces/state';
import BookAction from '@redux/book/action';
import ListBooks from '@app/components/ListBooks';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<State, BookInterface[]>(state => state.book.books);
  useEffect(() => {
    dispatch(BookAction.getBooks());
  }, [dispatch]);
  return <ListBooks books={books} />;
}
export default Library;
