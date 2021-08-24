import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const completedActions = completeTypes({
  primaryActions: ['GET_BOOKS'],
  ignoredActions: ['FILTER_SEARCH']
});
export const actions = createTypes(completedActions, '@@BOOK');

export const target = {
  BOOKS: 'books',
  FILTER_SEARCH: 'filterSearch'
};

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: target.BOOKS,
    service: BookService.getBooks
  }),
  filterBooks: (filterText: string) => ({
    type: actions.FILTER_SEARCH,
    target: target.FILTER_SEARCH,
    payload: filterText
  })
};

export default actionCreators;
