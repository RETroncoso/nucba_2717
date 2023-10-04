import { Router } from "express";
import { postNewIssue } from "../controllers/issues";
import validarJWT from "../middlewares/validarJWT";
import { isAdmin } from "../middlewares/validarRol";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { check } from "express-validator";

const router = Router();

router.post("/",
    [
        validarJWT,
        isAdmin,
        check("title", "El título es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("priority", "La prioridad es obligatoria").not().isEmpty(),
        recolectarErrores
    ],
    postNewIssue
)

export default router