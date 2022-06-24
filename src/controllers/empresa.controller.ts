import { NextFunction, Request, Response } from "express";
import { createModuleResolutionCache } from "typescript";
import { Empresa } from "../models/Empresa";
import EmpresaServices from "../services/empresa.service";



export const getEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    //console.log("getEmpresa Ok")
    const empresaServ = new EmpresaServices();
    const empresa = await empresaServ.getEmpresa();

    //res.send('Tu empresa:  ' + empresa);

    // res.json( {mod} );

    console.log("getEmpresa Ok")
    res.status(200).json(empresa)

    //res.status(200) para apis
}

export const getEmpresaId = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const empresaServ = new EmpresaServices();
    const empresa = await empresaServ.getEmpresaId(id);

    if (empresa) {
        console.log("getEmpresa ID controller ok");
        res.status(200).json(empresa);
    } else {
        res.status(404).json({
            msg: `No existe empresa con id ${id}`
        })
    }


}

export const putEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new EmpresaServices();

    //const empresa = await objService.putEmpresa(id, payload)
    // console.log("params",req.params)
    // console.log("query", req.query)
    // console.log("body", req.body, id)
    // res.status(200).json(empresa);

    try {
        const empresa = await objService.putEmpresa(id, payload)
        console.log("body", req.body, id)
        res.status(200).json(empresa);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new EmpresaServices();

    // await objService.deleteEmpresa(id)

    try {
        console.log(payload.direccion);

        const empresa = await objService.postEmpresa(payload);
        console.log("postEmpresa controller ok");

        res.status(200).json(empresa);
    } catch (error) {

        console.log(error);
        res.status(500)

    }


}

export const deleteEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new EmpresaServices();

    // await objService.deleteEmpresa(id)
    // const empresa = await objService.deleteEmpresa(id);
    // console.log("deleteEMpresa OK");

    // res.status(200).json(empresa);

    try {
        const empresa = await objService.deleteEmpresa(id);
        console.log("deleteEMpresa OK");
        res.status(200).json(empresa);

    } catch (error) {
        console.log('error en deleteEmpresa controller');
        res.status(500).json({ })
    }

}