import express, {Express} from "express";
import { conectarDB } from "../database/config";
import studentRoutes from "../routes/students"
import camadasRoutes from "../routes/camada"

export class Server {

    app: Express

    constructor() {
        this.app = express();

        this.conexionaBD();

        this.middlewares();

        this.routes();
    }


    async conexionaBD(): Promise<void> {
        await conectarDB()
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