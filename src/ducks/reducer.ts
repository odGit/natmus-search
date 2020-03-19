import { 
  GET_SEARCH_NO_ITEMS, GET_SEARCH_START_REQUEST, GET_SEARCH_SUCCESS,
  GET_IMG_SUCCESS, CHANGE_PAGE, SET_QUERY } from './actionTypes';
import { AppActionTypes, AppState } from './types';
 
function reducer (state: AppState, action: AppActionTypes): AppState {
  // console.log('REDUCER', action)
  switch (action.type) {
    case GET_SEARCH_START_REQUEST: {
      return {
        ...state,
        showSpinner: action.isLoading,
        showNoRes: false,
        data: [],
      }
    }
    case GET_SEARCH_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        showSpinner: action.isLoading,
        showNoRes: false,
        totalItems: action.totalItems,
        perPage: action.perPage,
        queryTerm: action.query,
      }
    }
    case GET_SEARCH_NO_ITEMS:{
      return {
        ...state,
        showSpinner: action.isLoading,
        showNoRes: true,
        queryTerm: action.queryTerm,
      }
    }
    case GET_IMG_SUCCESS:{
      return{
        ...state,
        imgFiles: Object.assign({}, state.imgFiles, {[action.imgId] : action.img }),
        imgAvailable: state.imgAvailable.concat(action.imgId),
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        offsetSize: state.offsetSize + (action.nextPage * state.limit)
      }
    }
    case SET_QUERY: {
      return {
        ...state,
        queryTerm: action.queryTerm,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;
