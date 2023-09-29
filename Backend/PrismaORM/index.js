"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create una camada
        // const camada = await prisma.camada.create({
        //     data: {
        //         nombre: 2717,
        //         dias: "Martes y Jueves",
        //         modulo: "Backend"
        //     }
        // })
        // console.log(camada);
        // select todas las camadas
        // const allCamadas = await prisma.camada.findMany();
        // console.log(allCamadas);
        // create muchas camadas
        // const camadas = await prisma.camada.createMany({
        //     data: [
        //                 {
        //                     nombre: 2817,
        //                     dias: "Martes y jueves",
        //                     modulo: "React",
        //                 },
        //                 {
        //                     nombre: 3117,
        //                     dias: "Martes y jueves",
        //                     modulo: "Javascript",
        //                 },
        //                 {
        //                     nombre: 3317,
        //                     dias: "Lunes y miercoles",
        //                     modulo: "Javascript",
        //                 },
        //             ],
        // })
        // console.log(camadas);
        // select camada por id
        // const camadaById = await prisma.camada.findUnique({
        //     where: {
        //         id: 9
        //     }
        // })
        // console.log(camadaById);
        // select por campo
        // const camadasByDias = await prisma.camada.findMany({
        //     where: {
        //         dias: 'Martes y Jueves'
        //     }
        // })
        // console.log(camadasByDias);
        // create un alumno
        // const alumno = await prisma.alumno.create({
        //     data: {
        //                 nombre: "Juan Perez",
        //                 mail: "juan@gmail.com",
        //                 edad: 25,
        //                 camada: 2717,
        //             },
        // })
        // console.log(alumno);
        // create muchos alumnos
        // const alumnos = await prisma.alumno.createMany({
        //     data: [
        //         {
        //             nombre: "Paula Molina",
        //             mail: "paula@gmail.com",
        //             edad: 26,
        //             camada: 2817,
        //         },
        //         {
        //             nombre: "Romina Gomez",
        //             mail: "romina@hotmail.com",
        //             edad: 27,
        //             camada: 3117,
        //         }
        //     ]
        // })
        // console.log(alumnos);
        // select alumno por camada
        // const alumnoByCamada = await prisma.alumno.findMany({
        //     where: {
        //         camada: 2717
        //     }
        // })
        // console.log(alumnoByCamada);
        // select todos los alumnos con data de camada
        // const allAlumnos = await prisma.alumno.findMany({
        //     include: {
        //         camadas: true
        //     }
        // });
        // console.log(allAlumnos);
        // select all allAlumnos, pero solo algunbos campos de cada tabla
        // const allAlumnos = await prisma.alumno.findMany({
        //     select: {
        //         nombre: true,
        //         mail: true,
        //         camadas: {
        //             select: {
        //                 nombre: true,
        //                 dias: true
        //             }
        //         }
        //     }
        // })
        // console.log(allAlumnos);
        //Desconectamos de la DB
        prisma.$disconnect();
    }
    catch (error) {
        console.log(error);
        prisma.$disconnect();
    }
});
main();
