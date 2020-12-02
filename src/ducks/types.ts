import {
  GET_SEARCH_SUCCESS,
  GET_SEARCH_START_REQUEST,
  GET_SEARCH_NO_ITEMS,
  GET_SEARCH_FAIL,
  GET_IMG_START_REQUEST,
  GET_IMG_SUCCESS,
  GET_IMG_FAIL,
  CHANGE_PAGE,
  SET_QUERY
} from './actionTypes';

type collectionTypes = 'THM' | 'ES' | 'DNT' | 'FLM' | 'AS' | 'FHM' | 'DMR' | 'MUS' | 'flmlibrary';

export interface oldData {
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
}
interface natmusDate {
  from: {
    month: null
    year: null
    day: null
  };
  to: {
    month: null
    year: null
    day: null
  };
}
interface asset {
  filename: string | null;
  id: string | null;
  relation: string;
}

interface geoPos {
  heading: null;
  latitude: null;
  longitude: null;
}

export interface Data {
  data: {
    date: {
      note: null
      created: natmusDate
      recorded: natmusDate
    }
    collection: collectionTypes;
    type: 'asset'
    tags: {
      automated: []
      crowd: []
      verified: {
        subject: string[];
        location: []
        theme: []
        time: []
      }
    },
    actor: []
    file: {
      size: number
      name: string
      mediaType: string
      dimensions: {
        width: number
        ppi: number
        height: number
      }
    },
    related: {
      assets: asset[]
      objects: []
    },
    meta: {
      cropping: null
      rotation: null
      rating: null
      modified: number
    },
    rights: {
      license: string | null
      administrator: string
    },
    location: {
      zipcode: null
      note: null
      address: null
      crowd: geoPos
      city: null
      verified: geoPos
    },
    id: number
    text: {
      'da-DK': {
        description: string | null
        title: string
      },
      'en-GB': {
        description: string | null
        title: null | string
      }
    },
    physicalReference: {
      archiveName: null
      negativeNumber: string
      objectNumber: null
    }
    workDescription?: string
    // fileName?: string // only on collectionType == 'flmlibrary'
  };
  meta: {
    type: string
  };
}

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
  fetchImages: boolean;
}

interface GotSearchResAction {
  type: typeof GET_SEARCH_SUCCESS;
  isLoading: boolean;
  payload: Data[];
  totalItems: number;
  perPage: number;
  query: string;
}

interface StartSearchAction {
  type: typeof GET_SEARCH_START_REQUEST;
  isLoading: boolean;
}

interface EmptySearchAction {
  type: typeof GET_SEARCH_NO_ITEMS;
  isLoading: boolean;
  queryTerm: string;
}

interface FailSearchAction {
  type: typeof GET_SEARCH_FAIL;
  isLoading: boolean;
  error: Error;
}

// IMAGES ACTIONS TYPES
interface StartImageAction {
  type: typeof GET_IMG_START_REQUEST;
  isLoading: boolean;
  itemId: number;
  imgId: string;
}

interface GotImageAction {
  type: typeof GET_IMG_SUCCESS;
  isLoading: false;
  itemId: number;
  imgId: string;
  img: Blob;
}

interface FailImageAction {
  type: typeof GET_IMG_FAIL;
  isLoading: boolean;
  itemId: number;
  imgId: string;
  error: Error;
}

interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  nextPage: number;
}

export type QueryAction = {
  type: typeof SET_QUERY;
  queryTerm: string;
};

export type SearchActionTypes = GotSearchResAction | StartSearchAction | FailSearchAction | EmptySearchAction;
export type ImageActionTypes = StartImageAction | GotImageAction | FailImageAction;
export type PageActionTypes = ChangePageAction;
export type AppActionTypes = SearchActionTypes | ImageActionTypes | PageActionTypes | QueryAction;
