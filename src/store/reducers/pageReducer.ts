/* eslint-disable indent */
import { ActionType, initialState, PageState, PageTypes } from '../../types/PageTypes';

export const pageReducer = (state = initialState, action: ActionType): PageState => {
  switch (action.type) {
    case PageTypes.ADD_PAGE:
      return action.payload > 0 ? { ...state, page: state.page + action.payload } : { ...state, page: state.page + 30 };
    case PageTypes.RESET_PAGE:
      return { ...state, page: 0 };
    default: {
      return state;
    }
  }
};
