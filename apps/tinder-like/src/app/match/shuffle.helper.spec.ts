import { getRandom } from './shuffle.helper';

describe('getRandom helper', () => {
  it('expected 0 from random max 1', () => {
    expect(getRandom(1)).toBe(0);
  });

  it('expected 0, 1 or 2 from random max 3', () => {
    expect(getRandom(3)).toBeLessThan(3);
  });
});

describe('shuffle helper', () => {
  // it('matches even if received contains additional elements', () => {
  //   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const ranNumber = shuffle(array);
  //   const expected: unknown[] = [];
  //   array.forEach(() => {
  //     const param = ranNumber.next().value;
  //     expected.push(param);
  //   });
  //   expect(array.length).toBe(expected.length);
  //   expect(array).toEqual(expect.arrayContaining(expected));
  // });
});
