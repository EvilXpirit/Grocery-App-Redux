// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GroceryList from './GroceryList';
import Cart from './Cart';
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Grocery App</h1>
          <button className="cart-button" onClick={toggleCart}>Cart</button>
        </header>
        <GroceryList />
        {showCart && <Cart onClose={toggleCart} />}
      </div>
    </Provider>
  );
}

export default App;
