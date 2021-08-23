import { BOOKS_MOCK } from '@constants/mockBooks';

import { actions } from './action';
import booksReducer from './reducer';

const ERROR = 'Not Found 404';

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: 'books'
  },
  getBooksSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: 'books',
    payload: BOOKS_MOCK
  },
  getBooksFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: 'books',
    payload: ERROR
  }
};

describe('@@BOOKS/GET_BOOKS', () => {
  it('GET_BOOKS', () => {
    expect(booksReducer(undefined, testActions.getBooks)).toMatchObject({
      books: [],
      booksError: null,
      booksLoading: true
    });
  });
  it('GET_BOOKS_SUCCESS', () => {
    expect(booksReducer(undefined, testActions.getBooksSuccess)).toMatchObject({
      books: BOOKS_MOCK,
      booksError: null,
      booksLoading: false
    });
  });
  it('GET_BOOKS_FAILURE', () => {
    expect(booksReducer(undefined, testActions.getBooksFailure)).toMatchObject({
      books: [],
      booksError: ERROR,
      booksLoading: false
    });
  });
});
