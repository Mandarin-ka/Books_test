import { getUniqData } from '@utils/UniqData';

describe('unique fetching data', () => {
  test('[]', () => {
    expect(getUniqData([]).length).toEqual(0);
  });

  test('length 1', () => {
    expect(getUniqData([{ id: '1', volumeInfo: {} }]).length).toEqual(1);
  });

  test('without id duplicates', () => {
    const books = [
      { id: '1', volumeInfo: {} },
      { id: '2', volumeInfo: {} },
      { id: '3', volumeInfo: {} },
      { id: '4', volumeInfo: {} },
      { id: '5', volumeInfo: {} },
    ];
    expect(getUniqData(books).length).toEqual(5);
  });

  test('with id  duplicates', () => {
    const books = [
      { id: '1', volumeInfo: {} },
      { id: '2', volumeInfo: {} },
      { id: '2', volumeInfo: {} },
      { id: '3', volumeInfo: {} },
      { id: '1', volumeInfo: {} },
    ];
    expect(getUniqData(books).length).toEqual(3);
  });
});
