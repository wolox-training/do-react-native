import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const completedActions = completeTypes({
  primaryActions: ['GET_BOOKS'],
  ignoredActions: ['FILTER_SEARCH']
});
export const actions = createTypes(completedActions, '@@BOOK');

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  }),
  filterBooks: (filterText: string) => ({
    type: actions.FILTER_SEARCH,
    target: 'filterSearch',
    payload: filterText
  })
};

export default actionCreators;
