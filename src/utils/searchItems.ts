import { Dispatch } from 'react';
import { AppActionTypes } from '../ducks/types';
import { startSearchReq, failSearchReq, noSearchRes, gotSearchRes } from '../ducks/actions';

const mainURL = 'https://api.natmus.dk/search/public/simple';

export async function fetchSearchApi (
  query: string,
  size: number,
  offsetSize: number,
  dispatch: Dispatch<AppActionTypes>
  ): Promise<any> {
  const URL = `${mainURL}?query=${query}&size=${size}&offset=${offsetSize}`;
  dispatch(startSearchReq(true));

  try {
    const request = await fetch(URL);

    if (!request.ok) {
      const err = new Error(
        `SEARCH API req ${request.status}: ${request.statusText}`
      );
      return dispatch(failSearchReq(false, err));
    }

    const content = await request.json();
    console.log('OLGA OLGA', content);
    const total = Number(content.numberOfResultsTotal);
    const perPage = Number(content.numberOfResultsReturned);

    if (total === 0) {
      return dispatch(noSearchRes(false, query));
    }
    if (total > 0) {
      let pages = Math.floor(total / perPage);
      console.log('RESULTS', content.results);
      return dispatch(gotSearchRes(content.results, false, total, pages, query));
    }
  } catch (error) {
    return dispatch(failSearchReq(false, error));
  }

}
