import express, {Express} from "express";
import studentRoutes from "../routes/students"
import camadasRoutes from "../routes/camada"

export class Server {

    app: Express

    constructor() {
        this.app = express();

        this.middlewares();

        this.routes();
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/students", studentRoutes)
        this.app.use("/camadas", camadasRoutes)
    }

    listen(): void {
        this.app.listen(8080, () => {
            console.log(`Corriendo en puerto 8080`);
            
        })
    }

}