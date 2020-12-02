import React from 'react';
import { fetchSearchApi } from './searchItems';
import { AppActionTypes } from '../ducks/types';

function useSearch (
  offset: number,
  query: string | null,
  limit: number,
  dispatch: React.Dispatch<AppActionTypes>
  ) {
  React.useEffect(() => {
    if (query !== null && query !== 'null') {
      // TODO: do not know why, but somewhere null is casted into string ;(
      fetchSearchApi(query, limit, offset, dispatch);
    }
  },[offset, limit, query]);
}

export default useSearch;
