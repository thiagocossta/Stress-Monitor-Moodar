import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
