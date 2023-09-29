import { Router } from "express";
import { createCamada } from "../controllers/camadas";

const router = Router();

router.post("/", createCamada)

export default router;