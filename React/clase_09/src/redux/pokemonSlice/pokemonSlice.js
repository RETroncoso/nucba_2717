import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../../data/initialPokemon";

const initialState = {
	data: initialPokemon,
	isLoading: false,
	error: false,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		isFetching: (state) => {
			return {
				...state,
				isLoading: true,
				error: false,
				data: null,
			};
		},
		success: (state, action) => {
			return {
				...state,
				isLoading: false,
				data: action.payload,
				error: false,
			};
		},
		isError: (state) => {
			return {
				...state,
				error: "Pokemon no encontrado, busca bien pa 👀",
				data: null,
				isLoading: false,
			};
		},
	},
});

export const { isFetching, success, isError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
