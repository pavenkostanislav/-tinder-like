import { getRandom, shuffle } from './shuffle.helper';

describe('getRandom helper', () => {
  it('expected 0 from random max 1', () => {
    expect(getRandom(1)).toBe(0);
  });

  it('expected 0, 1 or 2 from random max 3', () => {
    expect(getRandom(3)).toBeLessThan(3);
  });
});

describe('shuffle helper', () => {
  it('matches even if received contains additional elements', () => {
    const ranNumber = shuffle([1, 2, 3, 4, 5]);
    const expected: number[] = [];
    let param;
    do {
      param = ranNumber.next().value;
      if(param) expected.push(param);
    }
    while(param);

    expect(expected.length).toBe(5);
    expect(expected).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});
