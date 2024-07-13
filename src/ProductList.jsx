import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice'; // Adjust the import path as needed

const plantsArray = [
  {
    name: 'Aloe Vera',
    image: 'https://example.com/aloe.jpg',
    description: 'A short-stemmed plant known for its medicinal uses.',
    cost: 10,
  },
  {
    name: 'Bamboo',
    image: 'https://example.com/bamboo.jpg',
    description: 'A tall and fast-growing plant.',
    cost: 20,
  },
  // Add more plant objects as needed
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>${plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

