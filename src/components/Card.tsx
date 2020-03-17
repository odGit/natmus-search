import React from 'react';
import Illustration from './card/Illustration';
import Collection from './card/Collection';
import Label from './atoms/Label';
import Materials from './card/Materials';

import ItemIDs from './card/ItemIDs'
import { Data } from '../ducks/types';

import '../sass/components/Card.scss';
import Measurements from './card/Measurements';
import Description from './card/Description';

type CardProps = {
  item: Data;
  i: number;
  classes: string| string[];
}

function Card ({item, i, classes}: CardProps): React.ReactElement {
  const {
    id, collection,
    identification, title,
    descriptions,
    images,
    materials, measurements
  } = item;

  return (
  <div className={`card ${classes}`}>
    <Illustration item={id} img_src={images} classes={"card-illustration"} />
    <Collection collection={collection} classes={"card-collection"}/>
    <Label label={title ? title.toLocaleUpperCase(): 'No Title'} classes={"card-title"} />
    <ItemIDs id_label={id.toString()} ident_label={identification}/>
    <Description descriptions={descriptions} />
    <Materials materials={materials}/>
    <Measurements id={id} measurements={measurements} />
  </div>
  );
}

export default Card;
