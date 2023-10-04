import {Router} from "express"
import { createOrder, getOrders } from "../controllers/orders";
import validarJWT from "../middlewares/validarJWT";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { isVerified } from "../middlewares/validarVerificado";
import { check } from "express-validator";

const router = Router();


router.get("/",
    [
        validarJWT,
        recolectarErrores
    ]
,getOrders)

router.post("/",
    [
        validarJWT,
        isVerified,
        check("price", "El precio es obligatorio").not().isEmpty(),
        check("shippingCost", "El consto de envío es obligatorio").not().isEmpty(),
        check("total", "El precio total es obligatorio").not().isEmpty(),
        check("shippingDetails", "Los detalles de envío son obligatorios").not().isEmpty(),
        check("items", "El array de productos es obligatorio").not().isEmpty(),
        recolectarErrores
    ],
createOrder)

export default router