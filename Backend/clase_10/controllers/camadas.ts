import { Request, Response } from "express";
import Camada, { ICamada } from "../models/camada";

export const createCamada = async (req: Request, res: Response) => {

    const camadaData: ICamada = req.body

    const {nombre, diasDeCursada, modulo} = camadaData;

    const camada = new Camada(camadaData);

    await camada.save();

    res.json({
        msg: "Todo ok",
        camada
    })
};