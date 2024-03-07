import { mapData } from '@utils/DataMap';

describe('mapping data', () => {
  test('[]', () => {
    expect(mapData([])).toEqual([]);
  });

  test('array length 1', () => {
    const books = [
      { id: '1', volumeInfo: { title: '123', authors: ['./aaa'], description: 'description' } },
    ];
    expect(mapData(books)).toEqual(books);
  });

  test('', () => {
    const books = [
      {
        id: '1',
        volumeInfo: { title: '123', authors: ['./aaa'], description: 'description' },
        testAny: '',
      },
      {
        id: '2',
        volumeInfo: {
          title: '123',
          authors: ['./aaa'],
          description: 'description',
          date: 'testDate',
        },
      },
      {
        id: '3',
        volumeInfo: {
          title: '123',
          authors: ['./aaa'],
          description: 'description',
          url: 'testUrl',
        },
      },
    ];

    const expected = [
      {
        id: '1',
        volumeInfo: { title: '123', authors: ['./aaa'], description: 'description' },
      },
      {
        id: '2',
        volumeInfo: {
          title: '123',
          authors: ['./aaa'],
          description: 'description',
        },
      },
      {
        id: '3',
        volumeInfo: {
          title: '123',
          authors: ['./aaa'],
          description: 'description',
        },
      },
    ];
    expect(mapData(books).length).toEqual(3);
    expect(mapData(books)).toEqual(expected);
  });
});
