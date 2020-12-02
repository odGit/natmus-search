import React from 'react';
import Illustration from './card/Illustration';
import Collection from './card/Collection';
import Label from './atoms/Label';

import ItemIDs from './card/ItemIDs';
import { Data } from '../ducks/types';

import '../sass/components/Card.scss';
import Description from './card/Description';

type CardProps = {
  item: Data;
  i: number;
  classes: string | string[];
}

function Card ({item, i, classes}: CardProps): React.ReactElement {
  const {
    id,
    collection
  } = item.data;
  const title = item.data.text ? item.data.text['da-DK'].title : 'No TITLE';
  const descriptions = item.data.workDescription ? item.data.workDescription : (item.data.text ? item.data.text['da-DK'].description : 'item.data.fileName');
  const images: any = [];
  const identification = 'Bob';

  return (
  <div className={`card ${classes}`}>
    <Illustration
      item={id}
      img_src={images}
      classes={'card-illustration'}
    />
    <div className='info-section'>
      <Collection collection={collection} classes={'card-collection'}/>
      <Label label={title ? title.toLocaleUpperCase() : 'No Title'} classes={'card-title'} />
      <ItemIDs id_label={id.toString()} ident_label={identification}/>
      <Description descriptions={descriptions} />
    </div>
  </div>
  );
}

export default Card;
