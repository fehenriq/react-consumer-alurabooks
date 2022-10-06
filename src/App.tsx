import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './routes';

function App() {
  return (<BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
