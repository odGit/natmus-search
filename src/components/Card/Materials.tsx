import React, { ReactElement } from 'react';

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
      <h2>Materials:</h2>
      {hasMaterials ? (
        <div>
          {typeList.length!==0 && <span key={`material-type`}>{`materials: ${typeList}`}</span>}
          {colorList.length!==0 && <span key={`material-color`}>{`color: ${colorList}`}</span>}
          {procList.length!==0 && <span key={`material-processing`}>{`processing: ${procList}`}</span>}
        </div>
      ) :(
        <span key={`material-color`}>No Info</span>
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