import axios from 'axios';

import BooksService from '@API/BooksAPI';

jest.mock('axios');
describe('API getting data', () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: '1',
          volumeInfo: {
            title: 'Sherlock',
            authors: ['Artur Conan Doyle'],
            publisher: 'England',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
            categories: ['detective'],
            imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
          },
        },
        {
          id: '2',
          volumeInfo: {
            title: 'Zombiland',
            authors: [''],
            publisher: '',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
            categories: ['Fantasy'],
            imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
          },
        },
        {
          id: '3',
          volumeInfo: {
            title: 'C++',
            authors: ['Straustrup'],
            publisher: 'USA',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
            categories: ['Science'],
            imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
          },
        },
        {
          id: '3',
          volumeInfo: {
            title: 'C++',
            authors: ['Straustrup'],
            publisher: 'USA',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
            categories: ['Science'],
            imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
          },
        },
      ],
    };
  });

  let responseOne;
  beforeEach(() => {
    responseOne = {
      data: [
        {
          id: '1',
          volumeInfo: {
            title: 'Sherlock',
            authors: ['Artur Conan Doyle'],
            publisher: 'England',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
            categories: ['detective'],
            imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
          },
        },
      ],
    };
  });

  test('Get many books', async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    const books = await BooksService.getBooks('testSearch', 'testCategory', 'testSort', 0);
    expect(books.data.length).toEqual(4);
  });

  test('Get one book', async () => {
    (axios.get as jest.Mock).mockReturnValue(responseOne);
    const books = await BooksService.getBook('testId');
    expect(books.data).toEqual([
      {
        id: '1',
        volumeInfo: {
          title: 'Sherlock',
          authors: ['Artur Conan Doyle'],
          publisher: 'England',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
          categories: ['detective'],
          imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
        },
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
