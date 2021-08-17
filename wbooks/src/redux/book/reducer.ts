import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './action';

export const initialState: BookState = completeState({
  description: {
    books: []
  },
  ignoredTargets: {
    filterSearch: ''
  }
});
const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.FILTER_SEARCH]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
