// import { Dispatch } from 'redux';
import BookService from '@services/BookService';
import { createTypes } from 'redux-recompose';

export const actions = createTypes(['GET_BOOKS'], '@@BOOK');
export enum ActionsType {
  GET_BOOKS = 'GET_BOOKS',
  GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'
}

/* const actionCreators = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: ActionsType.GET_BOOKS });
    const response = await BookService.getBooks();
    if (response.ok) {
      dispatch({ type: ActionsType.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: ActionsType.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};*/

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getBooks
  })
};

export default actionCreators;
