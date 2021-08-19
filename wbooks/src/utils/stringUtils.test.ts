import { getInitials, keepNumbers } from './stringUtils';

describe('get initial latter', () => {
  it('return W in Wolox', () => {
    expect(getInitials('wolox')).toEqual('w');
  });
  it('return `` ', () => {
    expect(getInitials('')).toEqual('');
  });
  it('return `t i w` in `training in wolox`', () => {
    expect(getInitials('training in wolox')).toEqual('t i w');
  });
  it('undefined', () => {
    expect(getInitials(undefined)).toBeUndefined();
  });
});

describe('keep only number', () => {
  it('get 2021 ', () => {
    expect(keepNumbers('wolox2021')).toEqual('2021');
  });
  it('get 2021 ', () => {
    expect(keepNumbers('wolox 2021')).toEqual('2021');
  });
  it('get 192021 ', () => {
    expect(keepNumbers('19 de agosto 2021')).toEqual('192021');
  });
  it('read number 2021  return string ', () => {
    expect(keepNumbers(2021)).toEqual('2021');
  });
  it('read number 100,25 , return 10025', () => {
    expect(keepNumbers(100.25)).toEqual('10025');
  });
  it(' return 10025', () => {
    expect(keepNumbers('100.25')).toEqual('10025');
  });
  it('undefined', () => {
    expect(getInitials(undefined)).toBeUndefined();
  });
});
