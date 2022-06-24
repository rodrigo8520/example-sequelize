import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getEmpresaValid = () => {
    return [

        body('id').optional().isNumeric(),
        body('direccion').optional().isString()
    ]
}

export const getEmpresaValidById = () => {
    return [

        check('id').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postEmpresaValid = () => {
    return [

        body('direccion').exists().isString(),
        body('telefono').exists().isNumeric()

    ]
}

export const deleteEmpresaValid = () => {
    return [
        check('id', "parametro requerido").exists().isNumeric()
    ]
}

export const putEmpresaValid = () => {
    return [

        check('id', "parametro requerido").exists().isNumeric(),
        body('direccion').exists().isString(),
        body('telefono').exists().isNumeric()

    ]
}


// el error detectado lo ataja aca.
export const validateEmpresa = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }
    next();

}



