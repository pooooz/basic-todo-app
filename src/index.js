import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { store } from './store';
import { App } from './App';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', cursive;
  }

  body {
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    background: #4b4b4b;
    font-family: 'Press Start 2P', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: inherit;
    height: inherit;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
