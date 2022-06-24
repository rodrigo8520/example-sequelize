/**
 * GET /v1/empresa
 * @description  Toda la lista de la empresa 
 * @summary  Toda la lista de la empresa
 * @tags empresa - endpoints para empresa
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/empresa/{id}
 * @description  lista de empresa por id
 * @summary  lista de empresa por id
 * @tags empresa - endpoints para empresa
 * @param {number} id.path.required - busca por id  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/empresa
 * @description  Crear empresa 
 * @summary Crear empresa 
 * @tags empresa - endpoints para empresa
 * @param {EmpresaCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A EmpresaCreate type
 * @typedef {object} EmpresaCreate
 * @property {string} direccion.required 
 * @property {number} telefono.required
 * @property {string} fechaCreacion.required
*/



/**
 * DELETE /v1/empresa/{id}
 * @description elimina registro de empresa
 * @summary elimina registro de empresa
 * @tags  empresa
 * @param {number} id.path.required - id a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/empresa/{id}
 * @description actualizacion de empresa
 * @summary actualizacion de empresa
 * @tags empresa
 * @param {number} id.path.required - id a actualizar
 * @param {empresaUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A empresaUpdate type
 * @typedef {object} empresaUpdate
 * @property {string} direccion.required 
 * @property {number} telefono.required
 * @property {string} fechaCreacion.required
*/