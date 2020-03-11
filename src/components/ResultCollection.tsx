import React from 'react';
import Card from './Card';
import {Data} from '../ducks/types'

type CollectionProps= {
  resultData: Data[];
}

function ResultCollection ({resultData}: CollectionProps) {
  return (
    <>{
      resultData.map((item: Data, index: number) => (
        <Card item={item} i={index} />
      ))
    }</>
  )

}

export default ResultCollection;