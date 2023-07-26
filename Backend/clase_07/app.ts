import express from "express";
import { logController, newRouteController, postController } from "./controllers/controller";

const app = express();

app.use(express.json());

app.get('/log', logController);
app.post('/log', postController);
app.patch('/log', logController);
app.get('/user', newRouteController)

app.listen(3000, () => {
    console.log("El servidor esta corriendo en el puerto 3000");
    
});