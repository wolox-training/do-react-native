import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { Provider } from 'react-redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

import Library from './index';

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);
const initialState = { book: { books: BOOKS_MOCK } };
const store = mockStore(initialState);
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    // @ts-ignore
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  };
});
describe('Testing FlatList', () => {
  const { getByText, getByA11yLabel, getAllByA11yRole } = render(
    <Provider store={store}>
      <Library />
    </Provider>
  );
  const flatList = getByA11yLabel('book list');
  const fristTitleBook = getByText(BOOKS_MOCK[0].title);
  const books = getAllByA11yRole('button');
  test('flatlist and frist item', () => {
    expect(flatList).toBeTruthy();
    expect(books.length).toBe(BOOKS_MOCK.length);
    expect(fristTitleBook).toBeTruthy();
  });
});
