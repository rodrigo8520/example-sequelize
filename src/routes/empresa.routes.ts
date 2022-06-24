import { Router } from "express"
import { deleteEmpresa, getEmpresa, getEmpresaId,
         postEmpresa, putEmpresa } from "../controllers/empresa.controller"
import { deleteEmpresaValid, getEmpresaValid, getEmpresaValidById, postEmpresaValid, putEmpresaValid, validateEmpresa } from "../controllers/empresa.validate"


const router = Router()
//router.use('/empresa', empresa)

router.get('/', getEmpresaValid(), validateEmpresa, getEmpresa)

router.get('/:id',getEmpresaValidById() , validateEmpresa, getEmpresaId)

//router.put('/:goku/detalles', putEmpresa)
router.put('/:id', putEmpresaValid(), validateEmpresa, putEmpresa)

router.delete('/:id', deleteEmpresaValid(), validateEmpresa, deleteEmpresa)

router.post('/', postEmpresaValid(), validateEmpresa, postEmpresa)






export default router