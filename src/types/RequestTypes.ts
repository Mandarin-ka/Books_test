interface RequestState {
  search: string;
  category: string;
  sort: string;
  page: number;
}

export enum RequestActionTypes {
  SET_SEARCH = 'SET_SEARCH',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_SORT = 'SET_SORT',
  ADD_PAGE = 'ADD_PAGE',
  RESET_PAGE = 'RESET_PAGE',
}

interface RequestSearchAction {
  type: RequestActionTypes.SET_SEARCH;
  payload?: string;
}

interface RequestCategoryAction {
  type: RequestActionTypes.SET_CATEGORY;
  payload?: string;
}

interface RequestSortAction {
  type: RequestActionTypes.SET_SORT;
  payload?: string;
}

interface RequestPageAction {
  type: RequestActionTypes.ADD_PAGE;
  payload?: number;
}

interface RequestResetPageAction {
  type: RequestActionTypes.RESET_PAGE;
}

export const initialState: RequestState = {
  search: '',
  category: 'all',
  sort: 'relevance',
  page: 0,
};

export type ActionType =
  | RequestSearchAction
  | RequestCategoryAction
  | RequestSortAction
  | RequestPageAction
  | RequestResetPageAction;
