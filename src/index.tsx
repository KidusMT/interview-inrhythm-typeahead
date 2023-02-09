import React from 'react';
import ReactDOM from 'react-dom';
// Redux libraries
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Root component
import { FormPage } from './components/form-page/form-page';
// Root reducer
import { reducer } from './redux';

export const configureStore = () => createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FormPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
