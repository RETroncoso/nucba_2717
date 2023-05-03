import { TYPES } from "../actionTypes/countActions";

export const counterInitialState = {
	count: 0,
};

export const counterReducer = (state, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case TYPES.INCREMENT_5:
			return {
				...state,
				count: state.count + 5,
			};
		case TYPES.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case TYPES.DECREMENT_5:
			return {
				...state,
				count: state.count - 5,
			};
		case TYPES.DIVIDE:
			return {
				...state,
				count: state.count / 2,
			};
		case TYPES.MULTIPLY:
			return {
				...state,
				count: state.count * 2,
			};
		case TYPES.RESET:
			return counterInitialState;
		default:
			return state;
	}
};
