import React from 'react';
import Illustration from './card/Illustration';
import Collection from './card/Collection';
import Label from './atoms/Label';
import Materials from './card/Materials';

import ItemIDs from './card/ItemIDs'
import { Data } from '../ducks/types';

import '../sass/components/Card.scss';
import Measurements from './card/Measurements';

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
    <Label label={title ? title.toLocaleUpperCase(): 'NONE'} classes={"card-title"} />
    <ItemIDs id_label={id.toString()} ident_label={identification}/>
    {descriptions === null ? <span className="card-description">Description missing.</span> : <span className="card-description">{descriptions}</span>}
    <Materials materials={materials}/>
    <Measurements measurements={measurements} />
  </div>
  );
}

export default Card;
