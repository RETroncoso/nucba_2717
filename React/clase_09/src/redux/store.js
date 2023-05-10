import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice/pokemonSlice";

export const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
	},
});
