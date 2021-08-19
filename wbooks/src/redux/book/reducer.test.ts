import { actions } from './action';
import booksReducer from './reducer';

const testActions = {
  getBooks: {
    type: actions.GET_BOOKS,
    target: 'books'
  }
};

describe('@@BOOKS/GET_BOOKS', () => {
  test('GET_BOOKS', () => {
    expect(booksReducer(undefined, testActions.getBooks)).toMatchObject({
      books: [],
      booksError: null,
      booksLoading: true
    });
  });
});
