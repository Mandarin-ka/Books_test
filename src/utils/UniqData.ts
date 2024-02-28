import { IBook } from '@projectTypes/IBooks';

export const getUniqData = (data: IBook[]) => {
  const ids = [];
  for (let i = 0; i < data.length; i++) {
    if (ids.indexOf(data[i].id) !== -1) {
      data[i] = null;
    } else {
      ids.push(data[i].id);
    }
  }

  return data.filter((e) => !!e);
};
