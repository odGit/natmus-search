import {GET_SEARCH_SUCCESS, GET_SEARCH_START_REQUEST, GET_SEARCH_NO_ITEMS, GET_SEARCH_FAIL} from './actionTypes';
import {Data, SearchActionTypes} from './types';

// GET DATA from SEARCH API
export const startSearchReq = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_START_REQUEST,
  isLoading: loadingData
});

export const gotSearchRes = (newData: Data[], loadingData: boolean, total:number, pages:number): SearchActionTypes => ({
  type: GET_SEARCH_SUCCESS,
  payload: newData,
  isLoading: loadingData,
  totalItems: total,
  totalPages: pages,
});

export const noSearchRes = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_NO_ITEMS,
  isLoading: loadingData
});

export const failSearchReq = (loadingData: boolean, error:Error): SearchActionTypes => ({
  type: GET_SEARCH_FAIL,
  isLoading: loadingData,
  error: error,
});

// GET DATA from IMG API
