
import faker from "@faker-js/faker";
import { NextFunction, Request, Response } from "express";
import Productos from "../services/productos.service";


export const getProducto = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
   // const var2 = req.params.valor2;
   // console.log(var1)
    // let aus1 = parseInt(var1)
    // let aus2 = parseInt(var2)
    let respuesta = var1
    //const respuesta = this();

    const var3 = faker.commerce.productName()

    const productosServ = new Productos();
    const productos = await productosServ.getProduct()

    //res.send('Tu producto es:  ' + productos);
    //console.log(productos.getProduct())

    res.status(200).json(productos)
    //res.status(200) para apis

}

export const getProductoNombre = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.name;
   // const var2 = req.params.valor2;
   // console.log(var1)
    // let aus1 = parseInt(var1)
    // let aus2 = parseInt(var2)
    let respuesta = var1
    //const respuesta = this();

    const var3 = faker.commerce.productName()

    const productosServ = new Productos();
    const productos = await productosServ.getProduct()

    //res.send('Tu producto es:  ' + productos);
    //console.log(productos.getProduct())

    res.status(200).json(productos)
    //res.status(200) para apis

}