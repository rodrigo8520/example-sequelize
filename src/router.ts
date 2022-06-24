import { Router } from "express";
import express, { Request, Response } from 'express'
// import * as mate from "./services/matematica";

//import { horaTrabajo, reajusteSalario } from "./services/trabajo";
import sumarMatematica from "./routes/sumar.routes";
import horaETrabajo from "./routes/remu.routes"
import producto from "./routes/producto.routes"
import empresa from "./routes/empresa.routes"

const router = Router()


// router.use(`/URL`, cargoRoutes);

router.get('/', (req: Request, res: express.Response) => {
    res.send('Express + TypeScript Server')

}); 
//matematicas/sumar/var1/var2
router.use('/matematicas', sumarMatematica)

router.use('/remu', horaETrabajo)

router.use('/producto', producto)

router.use('/empresa', empresa)




export default router