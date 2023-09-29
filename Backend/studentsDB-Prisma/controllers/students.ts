import { Request, Response } from "express";
import {  IStudentSQL } from "../models/student";
import Camada from "../models/camada";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudents = async (req: Request, res: Response) => {

    const condicion = {
        estado: true
    }

    // const students = await Student.find(condicion)
    //     .populate("camada", "nombre")
    //     // .populate({
    //     //     path: "camada",
    //     //     select: "nombre -_id"
    //     // })

    const students = await prisma.student.findMany({
        where: condicion
    })

    prisma.$disconnect()

    res.json({
        students
    })
}

export const getStudentByDNI = async (req: Request, res: Response) => {

    const {dni} = req.params
    
    // const student: IStudentSQL|null = await Student.findOne({dni: dni})
    // .populate("camada")

    const student = await prisma.student.findUnique({
        where: {
            dni: +dni
        }
    })

    prisma.$disconnect();

    res.json({
        student
    })
}

export const createStudent = async (req: Request, res: Response) => {

    const studentData: IStudentSQL = req.body;

    const {camada, dni, email, nombre} = studentData;

    // const camadaData = await Camada.findOne({nombre: camada})

    const camadaData = await prisma.camada.findUnique({
        where: {
            nombre: camada
        }
    })

    if (!dni || !nombre || !email || !camada) {
        res.json({
            msg: "Faltan datos necesarios en la peticion"
        })
        prisma.$disconnect()
        return
    }

    if(!camadaData) {
        res.json({
            msg: "La camada no se encontró en la base de datos"
        })
        prisma.$disconnect()
        return
    }

    // const alumnoEnDB = await Student.findOne({dni: dni})

    const alumnoEnDB = await prisma.student.findUnique({
        where: {
            dni: dni
        }
    })

    if (alumnoEnDB) {
        res.json({
            msge: "El alumno ya está registrado"
        })
        prisma.$disconnect()
        return
    }

    // const student = new Student({
    //     dni,
    //     email,
    //     nombre,
    //     camada: camadaData?._id
    // });

    // await student.save();

    const student = {
        dni,
        email,
        nombre,
        camada: camadaData?.nombre,
        estado: true
    };

    const studentToSave = await prisma.student.create({
        data: student
    })

    res.json({
        msg: "Todo ok",
        student
    })
}

export const updateStudent = async (req: Request, res: Response) => {

    const {dni} = req.params;

    const {estado, camada, ...data} = req.body;

    // const alumnoEnDB = await Student.findOne({dni: dni})

    const alumnoEnDB = await prisma.student.findUnique({
        where: {
            dni: +dni
        }
    })

    if (!alumnoEnDB) {
        res.json({
            msge: "El alumno no está en la base de datos"
        })
        prisma.$disconnect()
        return
    }

    // const student = await Student.findOneAndUpdate({dni: dni}, data, {new: true})

    const student = await prisma.student.update({
        where: {
            dni: +dni
        },
        data: data
    })

    prisma.$disconnect();

    res.json({
        student
    })

}

export const deleteStudent = async (req: Request, res: Response) => {

    const {dni} = req.params;

    // const alumnoEnDB = await Student.findOne({dni: dni})

    const alumnoEnDB = await prisma.student.findUnique({
        where: {
            dni: +dni
        }
    })

    if (!alumnoEnDB) {
        res.json({
            msge: "El alumno no está en la base de datos"
        })
        prisma.$disconnect();
        return
    }

    //HARD DELETE
    // const student = await Student.findOneAndDelete({dni: dni})

    //HARD DELETE CON PRISMA

    // const student = await prisma.student.delete({
    //     where: {
    //         dni: +dni
    //     }
    // })

    //SOFT DELETE
    // const student = await Student.findOneAndUpdate(
    //     {dni: dni},
    //     {estado: false},
    //     {new: true}
    // )

    //SOFT DELETE CON PRISMA


    const student = await prisma.student.update({
        where: {
            dni: +dni
        },
        data: {
            estado: false
        }
    })


    prisma.$disconnect()

    res.json({
        student
    })
    
}