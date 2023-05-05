import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";

const store = configureStore({
	reducer: counterReducer,
});

export default store;
