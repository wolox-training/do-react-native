import { createReducer, completeReducer, completeState } from 'redux-recompose';
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
    [actions.FILTER_SEARCH]: (state: BookState, action: { payload: string }) => ({
      ...state,
      filterSearch: action.payload
    })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
