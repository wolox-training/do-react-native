export enum ActionsType {
  GET_BOOKS = 'GET_BOOKS'
}

const ActionCreators = {
  getBooks: () => {
    return { type: ActionsType.GET_BOOKS };
  }
};

export default ActionCreators;
