import React, { ReactElement } from 'react';
import PageSection from './controlsBar/PageSection';

import '../sass/components/ControlsBar.scss';

function ControlsBar (): ReactElement {
  return (
    <div className='controls-bar'>
      <PageSection />
    </div>
  )
}

export default ControlsBar;
