import React, { ReactElement, useEffect} from 'react';
import SearchForm from './components/Search';
import ResultCollection from './components/ResultCollection';
import Loader from './components/atoms/LoadingScreen';
import { useCtx } from './Context';

import './sass/App.scss';
import NoResults from './components/NoResults';
import ControlsBar from './components/ControlsBar';
import { useReflectInUrl } from './utils/useReflectInUrl';
import useSearch from './utils/useSearch';

function App(): ReactElement {
  const {state, dispatch} = useCtx();
  const { offsetSize, limit, queryTerm } = state;

  useSearch(offsetSize, queryTerm, limit, dispatch);
  useReflectInUrl(offsetSize, queryTerm);

  return (
    <div className="App container">
      <SearchForm/>
      {state.totalItems !== state.perPage && <ControlsBar />}
      {state.showSpinner && <Loader />}
      {state.data && <ResultCollection resultData={state.data}/>}
      {state.showNoRes && <NoResults term={state.queryTerm!} />}
    </div>
  );
}

export default App;
