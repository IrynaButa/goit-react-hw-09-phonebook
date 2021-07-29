import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

ReactDOM.render(
   
  <React.StrictMode>
   
      <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();