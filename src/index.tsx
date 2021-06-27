import React from 'react';
import ReactDOM from 'react-dom';
import  './index.scss'
import App from './App';
import {HashRouter} from "react-router-dom";
import { store } from './redux/store';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
          <HashRouter>
              <Provider store={store}>
                  <App/>
              </Provider>
          </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

