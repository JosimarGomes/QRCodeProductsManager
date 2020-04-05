import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from 'components/Header';
import Routes from './router';
import store from 'config/redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="container-app">
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
