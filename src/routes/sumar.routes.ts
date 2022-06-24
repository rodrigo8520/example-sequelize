
import { Router } from "express";
import { getSumar } from "../controllers/sumar.controller";


const router = Router()
//matematicas/sumar/var1/var2

router.get('/sumar/:valor1/:valor2', getSumar)



export default router
