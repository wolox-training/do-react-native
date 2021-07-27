/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './src/app';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = { books: [] };
const store = mockStore(initialState);
// Note: test renderer must be required after react-native.
it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
