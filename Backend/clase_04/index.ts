const sumar = (a: number, b: number): number => {
    return a + b;
};

// console.log(sumar(5,3));


// const objeto = {
//     nombre: "Juan",
//     saludar: () => {
//         console.log(`Hola! Soy ${this.nombre}`);
//     }
// }

// objeto.saludar()


function obtenerPrimerElemento<T>(array : T[]): T {
    return array[0]
}

const obtenerPrimerElemento2 = <T>(array : T[]): T => {
    return array[0]
}

const numeros: number[] = [1,2,3,4,5,6,7,8]

const nombres: string[] = ["Agus", "Elias", "Facu"]

obtenerPrimerElemento2(numeros)
obtenerPrimerElemento2(nombres)


type Coordenadas = {
    x: number;
    y: number
};

type Color = 'rojo' | 'verde' | 'azul';

type Punto = Coordenadas & {
    color: Color
};

const punto: Punto = {
    x: 10,
    y: 20,
    color: 'rojo'
}


interface Persona {
    nombre: string;
    edad: number;
    direccion: string;
};

function actualizarPersona(persona: Persona, cambios: Partial<Persona>): Persona {
    return {...persona, ...cambios}
};

const persona: Persona = {
    direccion: "Calle falsa 123",
    edad: 30,
    nombre: "Juan"
};

const cambios: Partial<Persona> = {
    nombre: "Agustin",
}

const personaActualizada = actualizarPersona(persona, cambios);

console.log(personaActualizada);


interface Auto {
    marca?: string;
    modelo?: string;
    puertas?: number;
};


const crearAuto = (auto: Required<Auto>): void => {
    console.log(auto);
}

const auto: Required<Auto> = {
    marca: "Ford",
    modelo: "Mustang",
    puertas: 2
};

crearAuto(auto)

interface Comida {
    readonly nombre: string;
    origen: string;
    ingredientes: string[];
}

const comida: Comida = {
    nombre: "Pizza",
    origen: "Italia",
    ingredientes: ["Masa", "Salsa", "Queso"]
};

// comida.nombre = "Fideos";

console.log(comida);


type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = {
    Juan: 85,
    Maria: 90,
    Pedro: 78
};

console.log(puntuaciones);


interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
};

type InfoProducto = Pick<Producto, 'nombre'|'precio'>;

const productoParaUsuario: InfoProducto  = {
    nombre: "Camiseta",
    precio: 29.99,
    // categoria: "Ropa"
};

type OmitProducto = Omit<Producto, 'id'>;

const omitParaUsuario: OmitProducto = {
    nombre: "Camiseta",
    categoria:"Ropita",
    descripcion: "Una camiseta re zarpada",
    precio: 50.24,
    // id: 25
}