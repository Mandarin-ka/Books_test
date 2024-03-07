import { ActionType, RequestActionTypes, RequestState } from '@projectTypes/RequestTypes';

export const initialState: RequestState = {
  search: '',
  category: 'all',
  sort: 'relevance',
  page: 0,
};

export const requestReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case RequestActionTypes.SET_SEARCH:
      return { ...state, search: action.payload };
    case RequestActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case RequestActionTypes.SET_SORT:
      return { ...state, sort: action.payload };
    case RequestActionTypes.ADD_PAGE:
      return action.payload
        ? { ...state, page: state.page + action.payload }
        : { ...state, page: state.page + 30 };
    case RequestActionTypes.RESET_PAGE:
      return { ...state, page: 0 };
    default:
      return state;
  }
};
