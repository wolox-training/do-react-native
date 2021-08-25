import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';

import Book from './index';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    // @ts-ignore
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  };
});

describe('Testing Book', () => {
  test(' charged correctly data', () => {
    const { queryByText } = render(<Book book={BOOKS_MOCK[0]} />);
    const title = queryByText(BOOKS_MOCK[0].title);
    const author = queryByText(BOOKS_MOCK[0].author);
    expect(title).toBeTruthy();
    expect(title?.props.children).toBe(BOOKS_MOCK[0].title);
    expect(author).toBeTruthy();
    expect(author?.props.children).toBe(BOOKS_MOCK[0].author);
  });
  test(' navigate to detail', async () => {
    const { getByRole, findByText } = render(<Book book={BOOKS_MOCK[0]} />);
    const touch = getByRole('button');
    expect(touch).toBeTruthy();
    fireEvent.press(touch);
    await waitFor(() => findByText('BOOK DETAIL'));
  });
});
