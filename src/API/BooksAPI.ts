import axios from 'axios';

const constants = {
  REQUEST_ADRESS: 'https://www.googleapis.com/books/v1/volumes',
};

export default class BooksService {
  static async getBooks(request: string, category: string, sort: string, page: number) {
    const path = `${constants.REQUEST_ADRESS}?key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(path, {
      headers: { Authorization: process.env.REACT_APP_API_KEY },
      params: {
        q: `${request}+subject:${category.toLowerCase() === 'all' ? '' : category}`,
        key: process.env.REACT_APP_API_KEY,
        orderBy: sort,
        maxResults: 30,
        startIndex: page,
      },
    });

    return response;
  }

  static async getBook(id: string) {
    const path = `${constants.REQUEST_ADRESS}/${id}?key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(path, {
      headers: { Authorization: process.env.REACT_APP_API_KEY },
      params: {
        key: process.env.REACT_APP_API_KEY,
      },
    });

    return response;
  }
}
