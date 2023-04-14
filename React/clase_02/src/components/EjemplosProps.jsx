export const SaludoPorProps = ({name, surname, age, country}) => {
    
    return <h1>Hola! Mi nombre es {name} {surname} y tengo {age} años y vivo en {country}</h1>
}

SaludoPorProps.defaultProps = {
    name: "Rodrigo",
    country: "Argentina"
};
