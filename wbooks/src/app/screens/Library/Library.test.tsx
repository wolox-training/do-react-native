import { FlatList } from 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Library from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = { book: { books: [] } };
const store = mockStore(initialState);

describe('Testing FlatList', () => {
  const library = render(
    <Provider store={store}>
      <Library />
    </Provider>
  );
  test('Error component should be render when error is true', () => {
    expect(library.UNSAFE_getAllByType(FlatList).length).toBe(1);
  });
});
