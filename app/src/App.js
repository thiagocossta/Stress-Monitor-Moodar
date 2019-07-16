import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
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
