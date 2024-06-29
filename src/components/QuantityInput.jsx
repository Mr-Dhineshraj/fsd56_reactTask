import React from 'react';
import { useQuantity } from './QuantityContext';

const QuantityInput = ({ productId }) => {
  const { products, incrementQuantity, decrementQuantity } = useQuantity();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    incrementQuantity(product.id);
  };

  const handleDecrement = () => {
    decrementQuantity(product.id);
  };

  return (
    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
      <button className="btn btn-primary px-3 me-2" onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <div className="form-outline">
        <input
          id={`form${product.id}`}
          min="0"
          name="quantity"
          value={product.quantity}
          type="number"
          className="form-control"
          readOnly
        />
        <label className="form-label" htmlFor={`form${product.id}`}>Quantity</label>
      </div>
      <button className="btn btn-primary px-3 ms-2" onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
