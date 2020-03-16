import React, { ReactElement } from 'react';
import Icon from '../atoms/Icon';
import{ICONS} from '../../enums/icons-svg';

type IllustrationProps = {
  img_src?: string;
  img_alt?: string;
  classes: string;
}

function Illustration({img_alt, img_src, classes}: IllustrationProps): ReactElement{
  return (
    <div className={classes}>
      {img_src ? <img src={img_src} alt={img_alt} /> : <Icon icon={ICONS.IMAGE} size={'3em'} color={'#719ECE'}/> }
    </div>
  );
}

export default Illustration;
