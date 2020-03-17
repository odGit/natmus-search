import React, { ReactElement } from 'react';
import '../../sass/components/atoms/Listing.scss';

type ListingsProps = {
  name: string,
  value: string | number | string[];
  classes: string;
};

function Listing({ name, value, classes }: ListingsProps): ReactElement {
  return (
    <div className={`listing-container ${classes}`} >
      <span className='listing-name'>{name.toUpperCase()}</span>
      <span className='listing-value'>{
        Array.isArray(value) ? value.join(' ') : value
      }</span>
    </div>
  )
}

export default Listing;
