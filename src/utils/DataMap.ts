import { IBook } from '../interfaces/IBooks';

export const mapData = (data: IBook[]) => {
  return data.map((e) => {
    return {
      id: e.id,
      volumeInfo: {
        title: e.volumeInfo?.title,
        authors: e.volumeInfo?.authors,
        description: e.volumeInfo?.description,
        categories: e.volumeInfo?.categories,
        imageLinks: e.volumeInfo?.imageLinks,
      },
    };
  });
};
