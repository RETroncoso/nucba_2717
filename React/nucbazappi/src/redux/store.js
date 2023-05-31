import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';

import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';
import recommendedReducer from './recommended/recommendedSlice';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
