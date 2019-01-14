import { add, minus, arrayify, concat } from '../src/index';

test('some test add foo', () => {
  expect(add(1, 2)).toBe(3);
});

test('testing minus fn', () => {
  expect(minus(111, 100)).toStrictEqual(11);
});

test('promise test', () => {
  const somePromise = new Promise((resolve) => resolve('qux'));

  return somePromise.then((data) => {
    expect(data).toStrictEqual('qux');
  });
});

test('should arrayify, the most common util', () => {
  expect(arrayify('foobar')).toMatchObject(['foobar', 123]);
  expect(arrayify(null)).toMatchObject([]);
  expect(arrayify()).toMatchObject([]);

  expect(arrayify([1, 'sasa', 3])).toMatchObject([1, 'sasa', 3]);
});

test('concat a string', () => {
  expect(concat('fofo')).toStrictEqual('fofo-sasa');
});
