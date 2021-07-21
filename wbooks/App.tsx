import 'react-native-gesture-handler';
import '@config/reactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';

import App from './src/app';
import { store } from './src/redux/store';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
