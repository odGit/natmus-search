import React from 'react';
import Illustration from './Card/Illustration';
import Collection from './Card/Collection';
import Label from './atoms/Label';

import ItemIDs from './Card/ItemIDs'
import { Data } from '../ducks/types';

import '../sass/components/Card.scss';

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
    // materials, measurements
  } = item;

  // images: string[]; 
  // materials: { 
  //   type: string; 
  //   color: string | null; 
  //   processing: string | null; 
  // }[]; 
  // measurements: { 
  //   type: string|null; 
  //   value: number|null; 
  //   unit: string|null; 
  // }[]; 
  return (
  <div className={`card ${classes}`}>
    <Illustration classes={"card-illustration"} />
    <Collection collection={collection} classes={"card-collection"}/>
    <Label label={title ? title.toLocaleUpperCase(): 'NONE'} classes={"card-title"} />
    <ItemIDs id_label={id.toString()} ident_label={identification}/>
    <span className="card-description">{descriptions}</span>
  </div>
  );
}

export default Card;
