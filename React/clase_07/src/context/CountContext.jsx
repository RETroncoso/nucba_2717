import { createContext, useReducer } from "react";
import { counterInitialState, counterReducer } from "../reducers/countReducer";

export const CountContext = createContext();

export const CountContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(counterReducer, counterInitialState);

	const data = { state, dispatch };

	return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};
