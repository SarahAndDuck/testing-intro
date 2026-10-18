const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {

  // test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, 'all');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([1, 2, 3, 4, 5, 6]);
  })

  // test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, undefined);
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([1, 2, 3, 4, 5, 6]);
  })

  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, '');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([1, 2, 3, 4, 5, 6]);
  })

  // test.todo("'electronics' возвращает товары с ID [1, 2]");
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const result = filterByCategory(products, 'electronics');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([1, 2]);
  })

  // test.todo("'books' возвращает товары с ID [3, 6]");
  test("'books' возвращает товары с ID [3, 6]", () => {
    const result = filterByCategory(products, 'books');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([3, 6]);
  })

  // test.todo("'home' возвращает товары с ID [4, 5]");
  test("'home' возвращает товары с ID [4, 5]", () => {
    const result = filterByCategory(products, 'home');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([4, 5]);
  })

  // test.todo("'clothes' возвращает пустой массив");
  test("'clothes' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'clothes');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([]);
  })

  // test.todo("'toys' возвращает пустой массив");
  test("'toys' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'toys');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([]);
  })

  // test.todo("'sports' возвращает пустой массив");
  test("'sports' возвращает пустой массив", () => {
    const result = filterByCategory(products, 'sports');
    const idResult = result.map(item => item.id)
    expect(idResult).toEqual([]);
  })

});



