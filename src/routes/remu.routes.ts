import { Router } from "express"
import { getHoraTrabajo, getReajuste } from "../controllers/remu.controller"



const router = Router()
//matematicas/sumar/var1/var2

router.get('/horatrabajo/:valor1/:valor2', getHoraTrabajo)

router.get('/reajuste/:valor1/:valor2', getReajuste)



export default router