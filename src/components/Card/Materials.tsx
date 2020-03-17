import React, { ReactElement } from 'react';
import Listing from '../atoms/Listing';
import {LABELSTEXT} from '../../enums/label-text';

type material = {
  type: string ; 
  color: string; 
  processing: string; 
}[];

type MaterialsProps = {
  materials: {
    type: string ; 
    color: string; 
    processing: string; 
  }[]
}; 

function Materials({materials}: MaterialsProps): ReactElement {
  const hasMaterials = materials.length !== 0;

  const colorList = uniqList(materials, 'color');
  const typeList = uniqList(materials, 'type');
  const procList = uniqList(materials, 'processing');

  return(
    <div className={"materials-wrapper"}>
      {hasMaterials ? (
        <div>
          {typeList.length!==0 && <Listing classes={'material-type'} name={LABELSTEXT.MATERIAL} value={typeList} />}
          {colorList.length!==0 && <Listing classes={'material-color'} name={LABELSTEXT.COLOR} value={colorList} />}
          {procList.length!==0 && <Listing classes={'material-processing'} name={LABELSTEXT.PROCESS} value={procList} />}
        </div>
      ) :(
        <Listing classes={'material-type'} name={LABELSTEXT.MATERIAL} value={LABELSTEXT.NO_DATA}/>
      ) 
    }
    </div>
  )
};

export default Materials;

function uniqList(arrayObj:{[key: string]: string }[], key:string): string[]{
  const list = arrayObj.filter((obj) => obj[key]).map((item) => item[key]);
  const uniqList = list.filter((val, index) => list.indexOf(val) === index);
  return uniqList
};