import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const completedActions = completeTypes({
  primaryActions: ['GET_BOOKS']
});
export const actions = createTypes(completedActions, '@@BOOK');

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  })
};

export default actionCreators;
