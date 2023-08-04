// import http from "http";
// const PORT = 8080;

// const server = http.createServer(async (req, res) => {
//     if (req.url === "/" && req.method === "GET") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Hola! Soy el home!"}))
//         res.end();
//         return
//     }
//     if (req.url === "/anidado" && req.method === "GET") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Hola! Soy la ruta anidada!"}))
//         res.end();
//         return
//     }

//     res.writeHead(404, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Che, acá no hay nada"}))
//         res.end();
//         return

// });

// server.listen(PORT, () => {
//     console.log(`Server corriendo en puerto ${PORT}`);
// })

import express from "express";
const app = express();
const PORT = 8080;

app.use(express.static("public"))

// app.get("/", (req, res) => {
//     res.send("Hola, soy el home!")
// })

app.get("/paginaDePrueba", (req, res) => {
    res.sendFile(__dirname + "/public/paginaDePrueba.html")
})

app.get("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html")
})

app.get("/elements", (req, res) => {
    res.sendFile(__dirname + "/public/elements.html")
})


app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html")
})

app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`);
})