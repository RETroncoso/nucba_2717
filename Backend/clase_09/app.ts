import express from "express";
import { getMultiplePokemon, getPokemonById, getSimplePokemonById } from "./controllers/pokemon";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/pokemon/full/:id", getPokemonById);

app.get("/pokemon/simple/:id", getSimplePokemonById);

app.get("/pokemon/multiple", getMultiplePokemon)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    
})