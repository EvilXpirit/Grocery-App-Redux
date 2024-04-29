// GroceryList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

import appleImage from './images/apple.jpg';
import bananaImage from './images/banana.jpg';
import orangeImage from './images/orange.jpg';
import milkImage from './images/milk.jpg';
import riceImage from './images/rice.jpg';
import oilImage from './images/oil.jpg';

const groceries = [
  { id: 1, name: 'Apple', price: 10, image: appleImage },
  { id: 2, name: 'Banana', price: 20, image: bananaImage },
  { id: 3, name: 'Orange', price: 15, image: orangeImage },
  { id: 4, name: 'Milk', price: 25, image: milkImage },
  { id: 4, name: 'Rice', price: 100, image: riceImage },
  { id: 4, name: 'Oil', price: 200, image: oilImage },
  // Add more food items here...
];

const GroceryList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="grocery-list">
      <h2>Grocery List</h2>
      <div className="grocery-cards">
        {groceries.map((item) => (
          <div key={item.id} className="grocery-card">
            <img src={item.image} alt={item.name} className="grocery-image" />
            <div className="grocery-details">
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
