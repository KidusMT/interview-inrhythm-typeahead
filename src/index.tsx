import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { FormPage } from './components/form-page/form-page';
import { configureStore } from './redux';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FormPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
