import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes';
import Store from './store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
