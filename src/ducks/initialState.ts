import {AppState} from './types';

export const initialState: AppState = {
  data: [],
  limit: 20,
  offsetSize: 0,
  awaitingData: false,
  errorMessage: null,
  total: 0,
  showSpinner: false,
};
