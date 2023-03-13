// IMPORT
// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom/client';
// APP
import App from './App';
// CONTEXT
import { PlayersContextProvider } from './context/PlayersContext';
import { GerarContextProvider } from './context/GerarContext';
import { CardsContextProvider } from './context/CardsContext';
import { CountLoadContextProvider } from './context/CountLoadContext';
// CSS
import './index.css';
// END IMPORT

// RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountLoadContextProvider>
    <CardsContextProvider>
      <PlayersContextProvider>
        <GerarContextProvider>
          <App />
        </GerarContextProvider>
      </PlayersContextProvider>
    </CardsContextProvider>
  </CountLoadContextProvider>
)