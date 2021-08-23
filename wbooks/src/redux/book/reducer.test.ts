import { BOOKS_MOCK } from '@constants/mockBooks';

import { actions, target } from './action';
import booksReducer from './reducer';

const ERROR = 'Not Found 404';
const FILTER_BOOK = 'Locked';

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: target.BOOKS
  },
  getBooksSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: target.BOOKS,
    payload: BOOKS_MOCK
  },
  getBooksFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: target.BOOKS,
    payload: ERROR
  },
  filterBook: {
    type: actions.FILTER_SEARCH,
    target: target.FILTER_SEARCH,
    payload: FILTER_BOOK
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
  it('Filter book', () => {
    expect(booksReducer(undefined, testActions.filterBook)).toMatchObject({
      filterSearch: FILTER_BOOK
    });
  });
});
