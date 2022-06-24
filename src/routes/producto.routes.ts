import { Router } from "express";
import { getProducto, getProductoNombre } from "../controllers/producto.controller";


const router = Router()

router.get('/getproducto', getProducto)

router.get('/getproductoNombre', getProductoNombre)


export default router