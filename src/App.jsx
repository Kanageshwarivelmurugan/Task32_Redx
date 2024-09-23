
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Carts from './Carts';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Provider store={store}>
      <Carts />
    </Provider>
  );
}

export default App;


