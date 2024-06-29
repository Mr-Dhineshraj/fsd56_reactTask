import React, { createContext, useState, useContext, useEffect } from 'react';
import productData from '../assets/product.json';

export const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Initialize products with quantity 0
    const productsWithQuantity = productData.products.map(product => ({
      ...product,
      quantity: 0
    }));
    setProducts(productsWithQuantity);
  }, []);

  const incrementQuantity = (id) => {
    setProducts(products =>
      products.map(product =>
        product.id === id && product.quantity < product.stock
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts(products =>
      products.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <QuantityContext.Provider value={{ products, incrementQuantity, decrementQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};

export const useQuantity = () => {
  return useContext(QuantityContext);
};


