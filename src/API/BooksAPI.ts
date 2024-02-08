import axios from 'axios';

const constants = {
  REQUEST_ADRESS: 'https://www.googleapis.com/books/v1/volumes',
  API_KEY: `AIzaSyAkr_hrIdj-ejrqO5elPFf4j1-GUL8kOCI`,
};

const path = `${constants.REQUEST_ADRESS}?key=${constants.API_KEY}`;

export default class BooksService {
  static async getBooks(request: string, category: string) {
    const response = await axios.get(path, {
      headers: { Authorization: constants.API_KEY },
      params: {
        q: `${request}+subject:${category.toLowerCase() === 'all' ? '' : category}`,
        key: constants.API_KEY,
        maxResults: 30,
      },
    });

    return response;
  }

  static async getBook(id: string) {
    const path = `${constants.REQUEST_ADRESS}/${id}?key=${constants.API_KEY}`;
    const response = await axios.get(path, {
      headers: { Authorization: constants.API_KEY },
      params: {
        key: constants.API_KEY,
      },
    });

    return response;
  }
}
