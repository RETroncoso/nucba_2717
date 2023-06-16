import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    createOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchOrdersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrdersFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchOrdersStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    clearOrders: (state) => {
      return {
        ...state,
        orders: null,
      };
    },
  },
});

export const {
  createOrderFail,
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrdersStart,
  clearError,
  clearOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
