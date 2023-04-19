import AppWrapper from "./components/AppWrapper/AppWrapper";
import EjemploChakra from "./components/EjemploChakra/EjemploChakra";
import EjemploEnLinea from "./components/EjemploEnLinea/EjemploEnLinea";
import EjemploModules from "./components/EjemploModules/EjemploModules";
import EjemploObjeto from "./components/EjemploObjeto/EjemploObjeto";
import EjemplosStyled from "./components/EjemplosStyled/EjemplosStyled";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		// <>
		// 	<AppWrapper>
		// 		<h1>HOLA!!!!</h1>
		// 		<EjemploEnLinea />
		// 		<EjemploModules />
		// 		<EjemploObjeto />
		// 		<EjemplosStyled />
		// 	</AppWrapper>
		// 	<GlobalStyles />
		// </>
		<EjemploChakra />
	);
}

export default App;
