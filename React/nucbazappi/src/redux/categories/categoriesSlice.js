import { createSlice } from '@reduxjs/toolkit';
import { Categories } from '../../data/Categories';

const INITIAL_STATE = {
  categories: Categories,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: state => {
      return state;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
