import { createSlice } from '@reduxjs/toolkit';
import { pickRandomProducts } from '../../utils/pickRandomProducts';

const INITIAL_STATE = {
  recommended: pickRandomProducts(4),
};

export const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: (state) => {
      return state;
    },
  },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;
