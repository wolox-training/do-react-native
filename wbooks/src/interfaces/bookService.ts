import { Book } from '@interfaces/book';

export interface ResponseBooks {
  ok: boolean;
  data: Book[];
  problem: string;
}
