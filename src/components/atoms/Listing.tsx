import React, { ReactElement } from 'react';
import '../../sass/components/atoms/Listing.scss';

type ListingsProps = {
  name: string,
  value: string | number | null;
  classes: string;
};

function Listing({ name, value, classes }: ListingsProps): ReactElement {
  return (
    <div className={`listing-container ${classes}`} >
      <span className='listing-name'>{name.toUpperCase()}</span>
      <span className='listing-value'>{
        value
      }</span>
    </div>
  )
}

export default Listing;
