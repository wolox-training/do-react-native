import { getInitials, keepNumbers } from './stringUtils';

describe('get initial latter', () => {
  it('get W in Wolox', () => {
    expect(getInitials('wolox')).toEqual('w');
  });
});

describe('keep only number', () => {
  it('get 2021 ', () => {
    expect(keepNumbers('wolox2021')).toEqual('2021');
  });
  it('2021', () => {
    expect(keepNumbers(2021)).toEqual('2021');
  });
});
