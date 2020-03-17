import React, { ReactElement } from 'react';
import{ICONS} from '../../enums/icons-svg';
import IconButton from '../atoms/IconButton';
import {fetchImageApi} from '../../utils/getImage';
import { useCtx } from '../../Context';

type IllustrationProps = {
  img_src: string[];
  img_alt?: string;
  classes: string;
  item: number;
}

function Illustration({ item, img_alt, img_src, classes}: IllustrationProps): ReactElement{
  const hasImages = img_src.length !== 0;
  const {state, dispatch} = useCtx();

  return (
    <div className={classes}>
      {state.imgAvailable.includes(img_src[0]) && hasImages && <img src={URL.createObjectURL(state.imgFiles[img_src[0]])} alt={img_alt} /> }
      <IconButton
        classes={'illustration icon-button'} 
        icon={ICONS.IMAGE} 
        isDisabled={!hasImages}
        icon_size={'3em'}
        onClickFn={() => fetchImageApi(img_src[0], item, dispatch)}
      />
    </div>
  );
}

export default Illustration;
