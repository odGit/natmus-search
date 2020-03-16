import { GET_SEARCH_SUCCESS, GET_SEARCH_START_REQUEST, GET_SEARCH_NO_ITEMS, GET_SEARCH_FAIL } from "./actionTypes";

export interface Data { 
  id: number; 
  collection: string; 
  identification: string; 
  title: string; 
  descriptions: string[]; 
  images: string[]; 
  materials: { 
    type: string; 
    color: string | null; 
    processing: string | null; 
  }[]; 
  measurements: { 
    type: string|null; 
    value: number|null; 
    unit: string|null; 
  }[]; 
};

export interface AppState {
  data: Data[];
  limit: number;
  offsetSize: number;
  awaitingData: boolean;
  errorMessage: string | null;
  showSpinner: boolean;
  totalPages: number;
  totalItems: number;
};

interface GotSearchResAction {
  type: typeof GET_SEARCH_SUCCESS;
  isLoading: boolean;
  payload: Data[];
  totalItems: number;
  totalPages: number;
};

interface StartSearchAction {
  type: typeof GET_SEARCH_START_REQUEST;
  isLoading: boolean;
};

interface EmptySearchAction {
  type: typeof GET_SEARCH_NO_ITEMS;
  isLoading: boolean;
};

interface FailSearchAction {
  type: typeof GET_SEARCH_FAIL;
  isLoading: boolean;
  error: Error;
};

export type SearchActionTypes = GotSearchResAction | StartSearchAction | FailSearchAction | EmptySearchAction;

export type AppActionTypes = SearchActionTypes;