import { Model, Schema, model } from "mongoose";

export interface IStudent {
    dni: number;
    nombre: string;
    camada: number;
    email: string;
    estado: boolean
}

const StudentSchema = new Schema<IStudent>({
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    camada: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Student: Model<IStudent> = model<IStudent>("Student", StudentSchema);

export default Student