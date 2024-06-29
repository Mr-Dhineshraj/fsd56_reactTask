import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../features/products/productsSlice';

const QuantityInput = ({ productId }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id: product.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id: product.id }));
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
