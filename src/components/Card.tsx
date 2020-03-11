import React from 'react';
import { Data } from '../ducks/types';

type CardProps = {
  item: Data;
  i: number;
}

function Card ({item, i}: CardProps) {
  return (
  <div key={`item-${i}`}>
    {(Object.keys(item) as Array<keyof typeof item>)
      .map((key, index) => (
         <p key={`item-${i}-${key}`}>{`${key}: ${item[key]}`}</p>
      ), [] as (typeof item[keyof typeof item])[]
    )}
  </div>
  );
}

export default Card;
