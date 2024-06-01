import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import GlobalStyle from './globalStyle';
import Routes from './Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
  <React.StrictMode>
    <GlobalStyle />
    <Routes/>
  </React.StrictMode>
  </Provider>
);


