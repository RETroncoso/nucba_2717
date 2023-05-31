import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../data/Products';
import { TotalProducts } from '../../data/Products';

const INITIAL_STATE = {
  products: Products,
  totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: state => {
      return state;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
