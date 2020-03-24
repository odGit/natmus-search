import React, { ReactElement } from 'react';
import '../sass/components/ErrorResults.scss';

type errorProps = {
  errorText: Error ;
  errorAction: () => void;
};

function ErrorResults ({ errorText, errorAction }: errorProps): ReactElement {
  return (
    <div className='no-results-found'>
      <div className='noname'>
        <h2 className='error-message'>
          {errorText.message ? errorText.message : 'Technical problems, could not get results'}
        </h2>
        {errorText.stack && <div className='error-stack'>{errorText.stack}</div>}
      </div>
      </div>
  );
}

export default ErrorResults;
