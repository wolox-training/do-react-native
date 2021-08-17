import { getInitials, keepNumbers } from './stringUtils';

describe('get initial latter', () => {
  test('get W in Wolox', () => {
    expect(getInitials('wolox')).toEqual('w');
  });
});

describe('keep only number', () => {
  test('get 2021 ', () => {
    expect(keepNumbers('wolox2021')).toEqual('2021');
  });
  test('2021', () => {
    expect(keepNumbers(2021)).toEqual('2021');
  });
});
