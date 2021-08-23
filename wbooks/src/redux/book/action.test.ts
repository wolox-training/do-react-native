import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BOOKS_MOCK } from '@constants/mockBooks';

import Actions, { actions, target } from './action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = { book: { books: [], filterSearch: '' } };
const mockedStore = mockStore(initialState);
// beforeEach(() => mockedStore.clearActions());
describe('actions filterBooks', () => {
  mockedStore.dispatch(Actions.filterBooks('action'));
  test('get filter', () => {
    expect(mockedStore.getActions()).toEqual([
      {
        target: target.FILTER_SEARCH,
        type: actions.FILTER_SEARCH,
        payload: 'action'
      }
    ]);
  });
  beforeEach(() => mockedStore.clearActions());
});

/* describe('actions get books', () => {
  beforeEach(() => mockedStore.clearActions());
  mockedStore.dispatch(Actions.getBooks());
  // api.get = jest.fn().mockImplementation(() => ({ ok: false, problem }));
  test('success', () => {
    expect(mockedStore.getActions()).toEqual([
      { target: 'books', type: actions.BOOK_ACTION },
      { target: 'books', type: actions.BOOK_ACTION_SUCCESS, payload: BOOKS_MOCK }
    ]);
  });
});*/
