import {Dispatch} from 'react';
import {AppActionTypes} from '../ducks/types';
import { startSearchReq, failSearchReq, noSearchRes, gotSearchRes } from "../ducks/actions";


export async function fetchSearchApi (
  query: string,
  size: number,
  offsetSize: number,
  dispatch: Dispatch<AppActionTypes>,
  ): Promise<any> {
  const URL = `https://frontend.natmus.dk/api/Search?query=${query}&size=${size}&offset=${offsetSize}`;
  dispatch(startSearchReq(true));

  try{
    const request = await fetch(URL);

    if(!request.ok){
      const err = new Error(
        `SEARCH API req ${request.status}: ${request.statusText}`
      );
      return dispatch(failSearchReq(false, err));
    }
    
    const content = await request.json();
    let total = Number(request.headers.get('Natmus-Total-Count'));
    let pages = Number(request.headers.get('Natmus-Page-Count'));

    if(content.length === 0){
      return dispatch(noSearchRes(false, query));
    }
    if(content.length > 0) {
      return dispatch(gotSearchRes(content, false, total, pages, query));
    }
  } catch (error) {
    return dispatch(failSearchReq(false, error));
  }

};