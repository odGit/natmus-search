import {URL_PROPS} from '../enums/url-props';

export function getInitialOffset() {
  const urlParams = new URLSearchParams(window.location.search);
    const initialOffset = (urlParams !== null && urlParams.get(URL_PROPS.OFFSET)) ? parseInt(urlParams.get(URL_PROPS.OFFSET)!, 10) : 0;
  return initialOffset;
};


export function getInitialQuery() {
  const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = (urlParams !== null && urlParams.get(URL_PROPS.QUERY)) ? urlParams.get(URL_PROPS.QUERY) : null;
  return initialQuery;
};