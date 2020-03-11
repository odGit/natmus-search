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


// export interface ResultsState {
//   results: Data[];
// };

export interface AppState {
  data: Data[];
  limit: number;
  offsetSize: number;
  awaitingData: boolean;
  errorMessage: string | null;
  total: number;
  showSpinner: boolean;
};

interface GotSearchResAction {
  type: typeof GET_SEARCH_SUCCESS;
  isLoading: boolean;
  payload: Data[];
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
};

export type SearchActionTypes = GotSearchResAction | StartSearchAction | FailSearchAction | EmptySearchAction;

export type AppActionTypes = SearchActionTypes;