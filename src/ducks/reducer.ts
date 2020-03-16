import { GET_SEARCH_NO_ITEMS, GET_SEARCH_START_REQUEST, GET_SEARCH_SUCCESS } from './actionTypes';
import { AppActionTypes, AppState } from './types';
// import { initialState } from './initialState';

// function reducer (state: AppState = initialState, action: AppActionTypes) {
function reducer (state: AppState, action: AppActionTypes): AppState {
  console.log('REDUCER', action)
  switch (action.type) {
    case GET_SEARCH_START_REQUEST: {
      return {
        ...state,
        showSpinner: action.isLoading,
        data: [],
      }
    }
    case GET_SEARCH_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        showSpinner: action.isLoading,
        totalItems: action.totalItems,
        totalPages: action.totalPages,
      }
    }
    case GET_SEARCH_NO_ITEMS:{
      return {
        ...state,
        showSpinner: false,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;
