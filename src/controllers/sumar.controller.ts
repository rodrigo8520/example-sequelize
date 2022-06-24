import { NextFunction, Request, Response } from "express";
import { sumar } from "../services/matematica.service";
import { Model, Optional, Sequelize } from 'sequelize';
import { Empresa } from "../models/Empresa";

// const router = Router()
                        
export const getSumar = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
    const var2 = req.params.valor2;
   // console.log(var1)
    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)
    let respuesta = sumar(aus1, aus2)
    //const respuesta = this();

    
    console.log(respuesta)

    const sequelize = new Sequelize({
        database:"facturacionDb",
        username:"factur",
        password:"abc123",
        host:"localhost",
        port:3306,
        dialect:'mysql',
    })
    try {
        await sequelize.authenticate();
        console.log('Connection facturacionDb has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database facturacionDb:', error);
      }

      res.send('el numero es ' + respuesta);


}

