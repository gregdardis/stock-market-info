import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './reducers';

const initialState = {
  dataItems: {
    Open: {
      value: 26.50,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    High: {
      value: 26.78,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    Low: {
      value: 25.90,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    Div: {
      value: 1.50,
      optionalValue: 6.04,
      valueSuffix: '',
      optionalValueSuffix: '%'
    },
    'Mkt Cap': {
      value: 1,
      optionalValue: null,
      valueSuffix: 'B',
      optionalValueSuffix: ''
    },
    Volume: {
      value: 40.2,
      optionalValue: 50.5,
      valueSuffix: 'k',
      optionalValueSuffix: 'k'
    },
    'P/E Ratio': {
      value: 500,
      optionalValue: 0.002,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    ROE: {
      value: 21,
      optionalValue: null,
      valueSuffix: '%',
      optionalValueSuffix: ''
    },
    FCFY: {
      value: 10,
      optionalValue: null,
      valueSuffix: '%',
      optionalValueSuffix: ''
    }
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);