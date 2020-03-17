import React from 'react';
import {URL_PROPS} from '../enums/url-props';


export function useReflectInUrl (offset: number, query: string | null) {
  React.useEffect(() => {
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${URL_PROPS.QUERY}=${query}&${URL_PROPS.OFFSET}=${offset}`
    );
  },[offset, query]);
};