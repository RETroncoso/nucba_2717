import jwt from "jsonwebtoken";

interface IObjetoAGuardar {
    id: number,
    username: string,
    isAdmin: boolean,
}

const objetoAGuardar = {
    id: 324,
    username: "LioMessi",
    isAdmin: false,
};

const miClaveSecreta = "74nucb4n3774";

const tokenFirmado = jwt.sign(objetoAGuardar, miClaveSecreta);

// console.log(tokenFirmado);

const tokenFirmadoConExpiracion = jwt.sign(objetoAGuardar, miClaveSecreta, {
    expiresIn: "30m"
});

// console.log(tokenFirmadoConExpiracion);

const tokenConCasoDeError = jwt.sign(objetoAGuardar, miClaveSecreta, {
    expiresIn: "30m"
}, (err, token) => {
    if(err) {
        console.log("Rompimo todo");
        console.log(err);
    } else {
        console.log("Token generado correctamente");
        console.log(token);
    }
});


const generarJWT = (dataAGuardar: IObjetoAGuardar) => {
    return new Promise((res, rej) => {
        jwt.sign(dataAGuardar, miClaveSecreta, {
            expiresIn: "30m"
        }, (err, token) => {
            if(err) {
                console.log(err);
                rej("Se rompio todo")
            } else {
                // console.log("Token generado correctamente");
                res(token)
            }
        })
    })
};

(async () => {
    const respuesta = await generarJWT(objetoAGuardar);
    // console.log(respuesta);
})()

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI0LCJ1c2VybmFtZSI6Ikxpb01lc3NpIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5Mjc0NzMxOCwiZXhwIjoxNjkyNzQ5MTE4fQ.4-LtWORPR1AgeoJUASEfzKEHD3SIxK-Zf3w_pvA48FY";

// const dataVerificada = jwt.verify(token, miClaveSecreta);

// console.log(dataVerificada);

import bcryptjs from "bcryptjs";

const constraseñaAEncriptar = "MiContraseñaSuperSegura";

// const salt = bcryptjs.genSaltSync(16);

// console.log("salt");
// console.log(salt);


// const contraseñaEncriptada = bcryptjs.hashSync(constraseñaAEncriptar, salt)

// console.log("Contraseña encriptada");
// console.log(contraseñaEncriptada);


// const contraseñaValida = bcryptjs.compareSync(constraseñaAEncriptar,"$2a$12$m/0RHl47iZF5.P7MB47d2ucFRHkJ3X5lD0znGdXXqYRI7kh2fGx1C")

// console.log("Mi contraseña es valida?");
// console.log(contraseñaValida);

(async () => {

    const asyncSalt = await bcryptjs.genSalt(16)

    console.log("asyncSalt");
    console.log(asyncSalt);
    
    const asyncContraseñaEncriptada = await bcryptjs.hash(constraseñaAEncriptar, asyncSalt);

    console.log("async Contraseña encriptada.");
    console.log(asyncContraseñaEncriptada);

    const asyncContraseñaValida = await bcryptjs.compare(constraseñaAEncriptar, asyncContraseñaEncriptada)

    console.log("ASYNC Mi contraseña es valida?");
    console.log(asyncContraseñaValida);
})()

console.log("Fin de codigo");
