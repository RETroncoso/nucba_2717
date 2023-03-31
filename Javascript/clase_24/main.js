//Importar TODO el modulo
import * as funciones from "./funciones.js";

console.log(funciones);

funciones.saludar("Mundo");
funciones.despedir("Mundo");
funciones.saludar(funciones.nombre);

// Importar funcion especifica

import { saludar, despedir, nombre } from "./funciones.js";

saludar();
despedir(nombre);

// Importar funcion especifica y renombrarla

import {
	saludar as saludo,
	despedir as despedida,
	nombre as agustin,
} from "./funciones.js";

saludo("Mundo3");
despedida("Mundo3");
saludo(agustin);
