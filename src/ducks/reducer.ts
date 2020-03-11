import {AppState, AppActionTypes} from './types';
import { GET_SEARCH_START_REQUEST, GET_SEARCH_SUCCESS } from './actionTypes';
// import { initialState } from './initialState';

// function reducer (state: AppState = initialState, action: AppActionTypes) {
function reducer (state: AppState, action: AppActionTypes) {
  switch (action.type) {
    case GET_SEARCH_START_REQUEST: {
      return {
        ...state,
        showSpinner: action.isLoading,
      }
    }
    case GET_SEARCH_SUCCESS: {
      console.log('OLGA OLGA OLGA', action.payload);
      return {
        ...state,
        data: action.payload,
        showSpinner: action.isLoading,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;
