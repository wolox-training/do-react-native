import { BOOKS_MOCK } from '@constants/mockBooks';

import { actions } from './action';
import booksReducer from './reducer';

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: 'books'
  },
  getBooksSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books',
    payload: BOOKS_MOCK
  }
  /* getBooksFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: 'books',
    payload: BOOKS_MOCK
  }*/
};

describe('@@BOOKS/GET_BOOKS', () => {
  test('GET_BOOKS', () => {
    expect(booksReducer(undefined, testActions.getBooks)).toMatchObject({
      books: [],
      booksError: null,
      booksLoading: true
    });
  });
  test('GET_BOOKS_SUCCESS', () => {
    expect(booksReducer(undefined, testActions.getBooksSuccess)).toMatchObject({
      books: BOOKS_MOCK,
      booksError: null,
      booksLoading: false
    });
  });
});
