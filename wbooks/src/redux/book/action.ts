import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export enum ActionsType {
  GET_BOOKS = 'GET_BOOKS',
  GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'
}

const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: ActionsType.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK, problem: 'Fail' };
    if (response.ok) {
      dispatch({ type: ActionsType.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: ActionsType.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
