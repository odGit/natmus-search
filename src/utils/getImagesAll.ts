 /* eslint-disable */
import { Dispatch } from 'react';
import { AppActionTypes } from '../ducks/types';
const FETCH_ALL_IMAGES_REQ = 'FETCH_ALL_IMAGES_START';
const FETCH_ALL_IMAGES_SUCCESS = 'FETCH_ALL_IMAGES_SUCCESS';
const FETCH_ALL_IMAGES_FAIL = 'FETCH_ALL_IMAGES_FAIL';
const url: string = 'https://frontend.natmus.dk/api/Image';

export async function fetchAllImages (
  dispatch: Dispatch<string>,
  imagesId: [string]
): Promise<any> {
  dispatch(fetchAllReq());
  // const fetchJson = (url: string) => fetch(url).then(res => res.json());

  Promise.all(imagesId.map(id => {
    const blob = fetch(`${url}?id=${id}`).then(res => res.json());
    return { id: blob };
  }))
    .then((imagesBlob: any) => {
      dispatch(fetchAllSuccess(imagesBlob));
    })
    .catch(err => {
      dispatch(fetchAllFail(err));
    });
}

const fetchAllReq = (): any => ({
  type: FETCH_ALL_IMAGES_REQ
});

const fetchAllFail = (error: any): any => ({
  type: FETCH_ALL_IMAGES_FAIL,
  payload: error
});

const fetchAllSuccess = (data: any): any => ({
  type: FETCH_ALL_IMAGES_SUCCESS,
  payload: data
});
