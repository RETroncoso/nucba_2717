import { Model, ObjectId, Schema, model } from "mongoose";

// export interface IStudent {
//     dni: number;
//     nombre: string;
//     camada: ObjectId;
//     email: string;
//     estado: boolean
// }

export interface IStudentSQL {
    dni: number;
    nombre: string;
    camada: string;
    email: string;
    estado?: boolean;
}

// const StudentSchema = new Schema<IStudent>({
//     dni: {
//         type: Number,
//         required: true,
//         unique: true,
//     },
//     nombre: {
//         type: String,
//         required: true,
//     },
//     camada: {
//         type: Schema.Types.ObjectId,
//         ref: "Camada",
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     estado: {
//         type: Boolean,
//         required: true,
//         default: true
//     }
// });

// const Student: Model<IStudent> = model<IStudent>("Student", StudentSchema);

// export default Student