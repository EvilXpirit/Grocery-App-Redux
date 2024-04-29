// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';

const Cart = ({ onClose }) => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-header">
          <h2>Cart</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - Rs{item.price}{' '}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          Total: Rs{totalPrice}
        </div>
      </div>
    </div>
  );
};

export default Cart;
