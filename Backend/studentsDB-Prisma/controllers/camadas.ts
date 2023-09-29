import { Request, Response } from "express";
import Camada, { ICamada } from "../models/camada";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createCamada = async (req: Request, res: Response) => {

    const camadaData: ICamada = req.body

    const {nombre, diasDeCursada, modulo} = camadaData;

    // const camada = new Camada(camadaData);
    // await camada.save();

    if(!nombre || !diasDeCursada || !modulo) {
        res.json({
            msg: "Faltan datos necesarios en la aplicación"
        })
        prisma.$disconnect();
        return
    }

    const camadaEnDB = await prisma.camada.findUnique({
        where : {
            nombre: nombre
        }
    });

    if(camadaEnDB) {
        res.json({
            msg: "La camada ya existe en la DB"
        })
        prisma.$disconnect();
        return
    }

    const camada = await prisma.camada.create({
        data: {
            nombre,
            diasDeCursada,
            modulo
        },
    })

    prisma.$disconnect();

    res.json({
        msg: "Todo ok",
        camada
    })
};