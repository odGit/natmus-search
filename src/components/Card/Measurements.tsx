import React, { ReactElement } from 'react';

type measurements = {
  type: string; 
  value: number; 
  unit: string; 
}[];

type MeasurementsProps = {
  measurements: {
    type: string; 
    value: number; 
    unit: string; 
  }[]
}; 

function Measurements({measurements}: MeasurementsProps): ReactElement {
  const hasMeasurements = measurements.length !== 0;


  return(
    <div className={"measurements-wrapper"}>
      <h2>Measurements:</h2>
      { hasMeasurements ? (
        measurements.map((item, index) => (
          (Object.keys(item) as Array<keyof typeof item>).map((key, i) => {
          return <i key={`measurements-${index}-${key}-${i}`}>{`${item[key]} `}</i>
          })
        ))
      ) : (
        <span key={`material-color`}>No information</span>
      )}
    </div>
  )
};

export default Measurements;

function uniqList(arrayObj:{[key: string]: string }[], key:string): string[]{
  const list = arrayObj.filter((obj) => obj[key]).map((item) => item[key]);
  const uniqList = list.filter((val, index) => list.indexOf(val) === index);
  return uniqList
};