import { AppState } from './types';
import { getInitialQuery } from '../utils/getInitialUrlParams';

export const initialState: AppState = {
  data: [],
  limit: 50,
  offsetSize: 0,
  awaitingData: false,
  errorMessage: null,
  perPage: 0,
  totalItems: 0,
  showSpinner: false,
  showNoRes: false,
  queryTerm: getInitialQuery(),
  imgFiles: {},
  imgAvailable: [],
  showError: false,
  fetchImages: true
};
