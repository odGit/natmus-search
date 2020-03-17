import React, {createContext, useReducer, useContext} from 'react';
import reducer from './ducks/reducer';
import {initialState} from './ducks/initialState'
import {AppState, AppActionTypes} from './ducks/types'

type StoreApi = {
  state: typeof initialState;
  dispatch: React.Dispatch<AppActionTypes>;
}

const ctx = createContext<StoreApi>({
  state: initialState,
  dispatch: () => {}
});

function StateProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer<React.Reducer<AppState, AppActionTypes>>(reducer, initialState);
  return <ctx.Provider value={{state, dispatch}} {...props} />
}

function useCtx() {
  const context = useContext(ctx);
  if (context === undefined) throw new Error(`No provider for AppContext given`);
  return context;
}

export {StateProvider, ctx, useCtx};
