import {GET_SEARCH_SUCCESS, GET_SEARCH_START_REQUEST, GET_SEARCH_NO_ITEMS, GET_SEARCH_FAIL} from './actionTypes';
import {Data, SearchActionTypes} from './types';

// GET DATA from SEARCH API
export const startSearchReq = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_START_REQUEST,
  isLoading: loadingData
});

export const gotSearchRes = (newData: Data[], loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_SUCCESS,
  payload: newData,
  isLoading: loadingData
});

export const noSearchRes = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_NO_ITEMS,
  isLoading: loadingData
});

export const failSearchReq = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_FAIL,
  isLoading: loadingData
});

// GET DATA from IMG API
