import { NextFunction, Request, Response } from "express";
import { ROLES } from "../helpers/constants";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {

    const {rol} = req.body.usuarioConfirmado;

    if (rol !== ROLES.admin) {
        res.status(401).json({
            msg: "El usuario no es administrador"
        })
        return
    }

    next()
}