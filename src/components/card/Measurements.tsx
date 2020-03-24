import React, { ReactElement } from 'react';
import Listing from '../atoms/Listing';
import { LABELSTEXT } from '../../enums/label-text';

type MeasurementsProps = {
  measurements: {
    type: string; 
    value: number; 
    unit: string; 
  }[],
  id: number
}; 

function Measurements({measurements, id}: MeasurementsProps): ReactElement {
  const hasMeasurements = measurements.length !== 0;

  return(
    <div className={"measurements-wrapper"}>
      { hasMeasurements ? (
        <div className={'listing-container measurements-item'} >
          <span className='listing-name'>{LABELSTEXT.MEASURE.toUpperCase()}</span>
          { measurements.map((item, index) => (
              <span className='listing-value' key={`value-${id}-${index}`}>{
                (Object.keys(item) as Array<keyof typeof item>).map((key, i) => {
                  return <i key={`measurements-${id}-${index}-${key}-${i}`}>{`${item[key]} `}</i>
                })
              }</span>
            ))
          }
        </div>
      ) : (
        <Listing
          classes={'measurements-item'}
          name={LABELSTEXT.MEASURE} 
          value={LABELSTEXT.NO_DATA}
        />
      )}
    </div>
  )
};

export default Measurements;