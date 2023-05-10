import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import Loader from "./components/loader/Loader";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import { useAxios } from "./hooks/useAxios";
import { useSelector } from "react-redux";

function App() {
	// const { data, isLoading, error, handleSubmit } = useAxios();

	const { isLoading, data, error } = useSelector((state) => state.pokemon);

	return (
		<>
			<MyAppStyled>
				<Search />
				{isLoading && <Loader />}
				{data && <Pokemon {...data} />}
				{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
			</MyAppStyled>
			<GlobalStyles />
		</>
	);
}

export default App;
