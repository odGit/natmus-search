import React, { ReactElement } from 'react';
import Listing from '../atoms/Listing';
import { LABELSTEXT } from '../../enums/label-text';
type DescProps = {
  descriptions: string[] | null;
}

function Description({descriptions}: DescProps): ReactElement{
  const hasDescription = descriptions !== null ? descriptions.length !== 0 : false;

  return ( hasDescription ? 
    <Listing classes="card-description" name={LABELSTEXT.DESCRIPTION} value={descriptions?.join(' ')!} />
    : 
    <Listing classes="card-description" name={LABELSTEXT.DESCRIPTION} value={LABELSTEXT.NO_DATA} />
  )
}

export default Description;