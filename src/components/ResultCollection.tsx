import React from 'react';
import Card from './Card';
import {Data} from '../ducks/types'
import '../sass/components/ResultCollection.scss';

type CollectionProps= {
  resultData: Data[];
}

function ResultCollection ({resultData}: CollectionProps) {
  return (
    <div className="result-collection">{
      resultData.map((item: Data, index: number) => (
        <Card classes={"card"} item={item} key={`item-${index}`} i={index} />
      ))
    }</div>
  )

}

export default ResultCollection;