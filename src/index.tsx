import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider} from './Context';

function Main (): ReactElement {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
