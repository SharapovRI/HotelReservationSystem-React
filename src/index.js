import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import NewApp from './NewApp';

ReactDOM.render(
  <Provider store={rootReducer}>
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
  
