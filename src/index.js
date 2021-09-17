import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import {RouterConfig} from "./router";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './redux/middleware/logger';

const initialState = {};
//const store = createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: [
         loggerMiddleware,
        thunkMiddleware
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    //enhancers: [monitorReducersEnhancer],
});;

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <RouterConfig/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


