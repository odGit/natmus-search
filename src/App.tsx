import React, { ReactElement} from 'react';
import SearchForm from './components/SearchForm';
import ResultCollection from './components/ResultCollection';
import Loader from './components/atoms/LoadingScreen';
import { useCtx } from './Context';

import './sass/App.scss';
 

function App(): ReactElement {
  const {state} = useCtx();

  return (
    <div className="App container">
      <SearchForm/>
      {state.data && <ResultCollection resultData={state.data}/>}
      {state.showSpinner && <Loader />}
    </div>
  );
}

export default App;
