import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { sampleReducer } from './reducer';

const rootReducer = combineReducers({
  sampleReducer
});

export type IStoreState = ReturnType<typeof rootReducer>;

export const configureStore = () => createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
