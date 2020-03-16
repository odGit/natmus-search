import React, { ReactElement } from 'react';
import Label from '../atoms/Label';

function letterToIndex (letter :string) :number {
  /**
   * converts letters into int in a range from 0 - 28
   */
  const specChars: { [key: string]: number} = {'æ': 26, 'ø': 27, 'å': 28, 'Æ': 26, 'Ø': 27, 'Å': 28};
  if (Object.keys(specChars).includes(letter)){
    return specChars[letter]
  }
  // the ascii value,
  // 65 for Uppercase letters and 97 for lowercase letters 
  return letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 97 : 65);
}

function indeciesToRGB (idx1:number, idx2:number, idx3:number=0): string {
  const rVal = (idx1 / 28) * 255;
  const gVal = (idx1 / 28) * 255;
  const bVal = (idx1 / 28) * 255;
  return `rgb(${Math.round(rVal * 100) / 100}, ${Math.round(gVal * 100) / 100}, ${Math.round(bVal * 100) / 100})`
}

type CollectionProps = {
  collection: string;
  classes: string;
};

function Collection ({collection, classes}: CollectionProps): ReactElement{
  
return (
  <Label label={collection.toLocaleUpperCase()} classes={classes}/>
  );
};

export default Collection;
