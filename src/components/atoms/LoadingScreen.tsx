import React from 'react';
import '../../sass/components/atoms/LoadingScreen.scss';

function Loader (): React.ReactElement {
  return (
    <div className="loader-container">
    <ul>
      {[...Array(20)].map((item, index) => {
        return <li key={`spinner-item-${index}`}></li>
      })}
    </ul>
  </div>
  )
};

export default Loader;