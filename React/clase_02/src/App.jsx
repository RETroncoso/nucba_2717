import logo from "./logo.svg";
import "./App.css";
import { EjemploConJSX, EjemploSinJSX } from "./components/EjemplosJSX";
import { EjemploClases, EjemploFuncional } from "./components/EjemplosTiposComponentes";
import { SaludoPorProps } from "./components/EjemplosProps";
import EjemploCondicional from "./components/EjemploCondicional";
import { RenderDinamico } from "./components/EjemploRenderDinamico";


function App() {
	return <>
		<EjemploSinJSX/>
		<EjemploConJSX />
		<EjemploClases />
		<EjemploFuncional />
		<SaludoPorProps name="Elias" surname="Rojas" age={28} />
		<EjemploCondicional/>
		<RenderDinamico />
	</>
	
}

export default App;
