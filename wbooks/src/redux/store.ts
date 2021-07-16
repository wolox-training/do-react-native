import { createStore } from 'redux';

import reducer from './book/reducer';

export const store = createStore(reducer);
