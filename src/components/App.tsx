import React, { ReactElement} from 'react';
import SearchForm from './SearchForm';
import ResultCollection from './ResultCollection';
import { useCtx } from '../Context';
 

function App(): ReactElement {
  const {state} = useCtx();

  return (
    <div className="App">
      <SearchForm/>
      {state.data && <ResultCollection resultData={state.data}/>}
    </div>
  );
}

export default App;
