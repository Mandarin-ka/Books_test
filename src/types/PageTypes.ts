export enum PageTypes {
  ADD_PAGE = 'ADD_PAGE',
  RESET_PAGE = 'RESET_PAGE',
}

export interface PageState {
  page: number;
}

export const initialState = {
  page: 0,
};

export interface ActionType {
  type: string;
  payload?: number;
}
