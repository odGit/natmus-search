import { GET_SEARCH_SUCCESS, GET_SEARCH_START_REQUEST, GET_SEARCH_NO_ITEMS, GET_SEARCH_FAIL, GET_IMG_START_REQUEST, GET_IMG_SUCCESS, GET_IMG_FAIL, CHANGE_PAGE, SET_QUERY } from "./actionTypes";

export interface Data { 
  id: number; 
  collection: string; 
  identification: string; 
  title: string; 
  descriptions: string[]; 
  images: string[];
  materials: { 
    type: string; 
    color: string; 
    processing: string; 
  }[]; 
  measurements: { 
    type: string; 
    value: number; 
    unit: string; 
  }[]; 
};

export interface AppState {
  data: Data[];
  limit: number;
  offsetSize: number;
  awaitingData: boolean;
  errorMessage: Error | null;
  showSpinner: boolean;
  showNoRes: boolean;
  perPage: number;
  totalItems: number;
  queryTerm: string | null;
  // files:{[key: number] : {[key: string]: Blob} } | null;
  imgFiles: {[key: string]: Blob};
  imgAvailable: string[];
  showError: boolean;
};

interface GotSearchResAction {
  type: typeof GET_SEARCH_SUCCESS;
  isLoading: boolean;
  payload: Data[];
  totalItems: number;
  perPage: number;
  query: string;
};

interface StartSearchAction {
  type: typeof GET_SEARCH_START_REQUEST;
  isLoading: boolean;
};

interface EmptySearchAction {
  type: typeof GET_SEARCH_NO_ITEMS;
  isLoading: boolean;
  queryTerm: string;
};

interface FailSearchAction {
  type: typeof GET_SEARCH_FAIL;
  isLoading: boolean;
  error: Error;
};

// IMAGES ACTIONS TYPES
interface StartImageAction {
  type: typeof GET_IMG_START_REQUEST;
  isLoading: boolean;
  itemId: number;
  imgId: string;
};

interface GotImageAction {
  type: typeof GET_IMG_SUCCESS;
  isLoading: false;
  itemId: number;
  imgId: string;
  img: Blob;
};

interface FailImageAction {
  type: typeof GET_IMG_FAIL;
  isLoading: boolean;
  itemId: number;
  imgId: string;
  error: Error;
};

interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  nextPage: number;
}

export type QueryAction = {
  type: typeof SET_QUERY;
  queryTerm: string;
}

export type SearchActionTypes = GotSearchResAction | StartSearchAction | FailSearchAction | EmptySearchAction;
export type ImageActionTypes = StartImageAction | GotImageAction | FailImageAction;
export type PageActionTypes = ChangePageAction ;
export type AppActionTypes = SearchActionTypes | ImageActionTypes | PageActionTypes | QueryAction;