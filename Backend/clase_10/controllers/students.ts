import { Request, Response } from "express";
import Student, { IStudent } from "../models/student";
import Camada from "../models/camada";

export const getStudents = async (req: Request, res: Response) => {

    const condicion = {
        estado: true
    }

    const students = await Student.find(condicion)
        .populate("camada", "nombre")
        // .populate({
        //     path: "camada",
        //     select: "nombre -_id"
        // })

    res.json({
        students
    })
}

export const getStudentByDNI = async (req: Request, res: Response) => {

    const {dni} = req.params
    
    const student: IStudent|null = await Student.findOne({dni: dni})
    .populate("camada")

    res.json({
        student
    })
}

export const createStudent = async (req: Request, res: Response) => {

    const studentData: IStudent = req.body;

    const {camada, dni, email, nombre} = studentData;

    const camadaData = await Camada.findOne({nombre: camada})

    if (!dni || !nombre || !email || !camada) {
        res.json({
            msg: "Faltan datos necesarios en la peticion"
        })
        return
    }

    if(!camadaData) {
        res.json({
            msg: "La camada no se encontró en la base de datos"
        })
        return
    }

    const alumnoEnDB = await Student.findOne({dni: dni})

    if (alumnoEnDB) {
        res.json({
            msge: "El alumno ya está registrado"
        })
        return
    }

    const student = new Student({
        dni,
        email,
        nombre,
        camada: camadaData?._id
    });

    await student.save();

    res.json({
        msg: "Todo ok",
        student
    })
}

export const updateStudent = async (req: Request, res: Response) => {

    const {dni} = req.params;

    const {estado, camada, ...data} = req.body;

    const alumnoEnDB = await Student.findOne({dni: dni})

    if (!alumnoEnDB) {
        res.json({
            msge: "El alumno no está en la base de datos"
        })
        return
    }

    const student = await Student.findOneAndUpdate({dni: dni}, data, {new: true})

    res.json({
        student
    })

}

export const deleteStudent = async (req: Request, res: Response) => {

    const {dni} = req.params;

    const alumnoEnDB = await Student.findOne({dni: dni})

    if (!alumnoEnDB) {
        res.json({
            msge: "El alumno no está en la base de datos"
        })
        return
    }

    //HARD DELETE
    // const student = await Student.findOneAndDelete({dni: dni})

    //SOFT DELETE
    const student = await Student.findOneAndUpdate(
        {dni: dni},
        {estado: false},
        {new: true}
    )

    res.json({
        student
    })
    
}