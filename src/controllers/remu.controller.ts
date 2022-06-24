import { NextFunction, Request, Response } from "express";
import { horaTrabajo, reajusteSalario } from "../services/trabajo.service";




export const getReajuste = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
    const var2 = req.params.valor2;
   // console.log(var1)
    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)
    let respuesta = reajusteSalario(aus1, aus2)
    //const respuesta = this();

    res.send('Tu reajuste queda en:  ' + respuesta);
    //console.log(respuesta)


}

export const getHoraTrabajo = async (req: Request, res: Response, next: NextFunction) => {

    let var1 = req.params.valor1;
    let var2 = req.params.valor2;

    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)

    const respuesta = horaTrabajo(aus1, aus2);
    res.send('Tu salario es ' + respuesta);
}