import {
  GET_SEARCH_SUCCESS, GET_SEARCH_START_REQUEST, 
  GET_SEARCH_NO_ITEMS, GET_SEARCH_FAIL,
  GET_IMG_SUCCESS, GET_IMG_START_REQUEST, 
  GET_IMG_FAIL,
  CHANGE_PAGE,
  SET_QUERY,
} from './actionTypes';
import {Data, SearchActionTypes, ImageActionTypes, PageActionTypes, QueryAction} from './types';

// GET DATA from SEARCH API
export const startSearchReq = (loadingData: boolean): SearchActionTypes => ({
  type: GET_SEARCH_START_REQUEST,
  isLoading: loadingData
});

export const gotSearchRes = (
  newData: Data[],
  loadingData: boolean,
  total:number,
  pages:number,
  query: string,
): SearchActionTypes => ({
  type: GET_SEARCH_SUCCESS,
  payload: newData,
  isLoading: loadingData,
  totalItems: total,
  perPage: pages,
  query,
});

export const noSearchRes = (loadingData: boolean, query: string): SearchActionTypes => ({
  type: GET_SEARCH_NO_ITEMS,
  isLoading: loadingData,
  queryTerm: query,
});

export const failSearchReq = (loadingData: boolean, error:Error): SearchActionTypes => ({
  type: GET_SEARCH_FAIL,
  isLoading: loadingData,
  error,
});

// GET DATA from IMG API
export const startImageReq = (
  loadingImg: boolean,
  itemId: number,
  imgId: string
): ImageActionTypes => ({
  type: GET_IMG_START_REQUEST,
  isLoading: loadingImg,
  itemId,
  imgId,
});

export const gotImage = (
  loadingImg: false, 
  itemId: number,
  imgId: string,
  img: Blob,
): ImageActionTypes => ({
  type: GET_IMG_SUCCESS,
  isLoading: loadingImg,
  imgId: imgId,
  itemId: itemId,
  img: img,
});

export const failImageReq = (
  loadingImg: boolean,
  itemId: number,
  imgId: string,
  error: Error,
): ImageActionTypes =>({
  type: GET_IMG_FAIL,
  isLoading: loadingImg,
  itemId,
  imgId,
  error,
});


export const changePage = (payload: number): PageActionTypes => ({
  type: CHANGE_PAGE,
  nextPage: payload,
})

export const setQuery= (payload: string): QueryAction =>({
  type: SET_QUERY,
  queryTerm: payload,  
})