import { IBook } from '../interfaces/IBooks';

export const getUniqData = (data: IBook[]) => {
  const ids = [];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (ids.indexOf(data[i].id) !== -1) {
      data[i] = null;
      count += 1;
    } else {
      ids.push(data[i].id);
    }
  }

  return data.filter((e) => !!e);
};
