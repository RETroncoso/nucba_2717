import { Model, Schema, model } from "mongoose"

export interface ICamada {
    nombre: string,
    diasDeCursada: string,
    modulo: string
};

const CamadaSchema = new Schema<ICamada>({
    nombre: {
        type: String,
        unique: true
    },
    diasDeCursada: {
        type: String
    },
    modulo: {
        type: String
    }
});

const Camada: Model<ICamada> = model<ICamada>("Camada", CamadaSchema)

export default Camada;