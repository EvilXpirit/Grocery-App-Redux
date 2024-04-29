// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GroceryList from './GroceryList';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GroceryList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
