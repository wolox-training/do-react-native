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
describe('Testing Library', () => {
  test('have flatlist and length is equal to BOOKS_MOCK', () => {
    const { getByA11yLabel, getAllByA11yRole } = render(
      <Provider store={store}>
        <Library />
      </Provider>
    );
    const flatList = getByA11yLabel('book list');
    const books = getAllByA11yRole('button');
    expect(flatList).toBeTruthy();
    expect(books.length).toBe(BOOKS_MOCK.length);
  });
  test('frist books', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Library />
      </Provider>
    );
    const fristBooksTitle = getByText(BOOKS_MOCK[0].title);
    const fristBooksAuthor = getByText(BOOKS_MOCK[0].author);
    expect(fristBooksTitle).toBeTruthy();
    expect(fristBooksAuthor).toBeTruthy();
  });
  test('Dont have id in book', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <Library />
      </Provider>
    );
    const idbook = queryByText('0');
    expect(idbook).toBeNull();
  });
});
