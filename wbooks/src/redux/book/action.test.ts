import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import Actions, { actions, target } from './action';
import { initialState } from './reducer';

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);
const mockedStore = mockStore(initialState);
beforeEach(() => mockedStore.clearActions());
describe('Actions Books', () => {
  it('Filter Book', () => {
    mockedStore.dispatch(Actions.filterBooks('action'));
    expect(mockedStore.getActions()).toEqual([
      {
        target: target.FILTER_SEARCH,
        type: actions.FILTER_SEARCH,
        payload: 'action'
      }
    ]);
  });
  it('Get Book', () => {
    mockedStore.dispatch(Actions.getBooks());
    expect(mockedStore.getActions()).toEqual([{ target: target.BOOKS, type: actions.GET_BOOKS }]);
  });
});
