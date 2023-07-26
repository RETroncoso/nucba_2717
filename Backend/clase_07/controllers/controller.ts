import {Request, Response} from "express"

const logController = (req: Request, res: Response) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    
    console.log(`[${timestamp}] Método ${method} fue ejecutado en el controlador LOG`);
    
    res.json({
        message: "Holaaa! Desde el controlador",
        method,
        timestamp
    })
};

const postController = (req: Request, res: Response) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();

    console.log(req.headers.holis);
    

    console.log(`[${timestamp}] Método ${method} fue ejecutado en el controlador PostController`);

    const saludo = req.body.saludo;

    if (!saludo) {
        console.error(`[${timestamp}] ¡Falta el campo 'saludo' en la solicitud!`);
        res.status(400).json({
            error: "Campo faltante",
            message: "Falta el campo 'saludo' en la solicitud"
        });
        return;
    }

    res.json({
        message: "Hola desde el postController",
        receivedSaludo: saludo,
        method,
        timestamp
    })
}

const newRouteController = (req: Request, res: Response) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();

    console.log(`[${timestamp}] Método ${method} ejecutado en la nueva ruta`);
    
    res.json({
        message: "Hola desde la nueva ruta",
        method,
        timestamp
    })
};

export {logController, postController, newRouteController}