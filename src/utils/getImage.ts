import { Dispatch } from 'react';
import { AppActionTypes } from '../ducks/types';
import { startImageReq, failImageReq, gotImage } from '../ducks/actions';

export async function fetchImageApi (
  id: string,
  item: number,
  dispatch: Dispatch<AppActionTypes>
): Promise<any> {
  const url = `https://frontend.natmus.dk/api/Image?id=${id}`;

  dispatch(startImageReq(true, item, id));

  try {
    const request = await fetch(url);
    if (!request.ok) {
      const err = new Error(
        `IMAGE API req ${request.status}: ${request.statusText}`
      );
      return dispatch(failImageReq(false, item, id, err));
    }
    const imgBlob = await request.blob();
    return dispatch(gotImage(false, item, id, imgBlob));
  } catch (error) {
    return dispatch(failImageReq(false, item, id, error));
  }
}
