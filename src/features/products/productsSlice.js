import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/product.json';

const initialState = {
  products: productData.products.map(product => ({
    ...product,
    quantity: 0,
  })),
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product.quantity < product.stock) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product.quantity > 0) {
        product.quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = productsSlice.actions;

export default productsSlice.reducer;
