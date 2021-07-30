import { BOOKS_MOCK } from '@constants/mockBooks';
import { ResponseBooks } from '@interfaces/bookService';

const BookService = {
  getBooks: () =>
    new Promise<ResponseBooks>(resolve => {
      resolve({ ok: true, data: BOOKS_MOCK, problem: 'Fail' });
    })
};

export default BookService;
