import type { Sequelize } from "sequelize";
import { Empresa as _Empresa } from "./Empresa";
import type { EmpresaAttributes, EmpresaCreationAttributes } from "./Empresa";
import { Factura as _Factura } from "./Factura";
import type { FacturaAttributes, FacturaCreationAttributes } from "./Factura";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";

export {
  _Empresa as Empresa,
  _Factura as Factura,
  _Usuario as Usuario,
};

export type {
  EmpresaAttributes,
  EmpresaCreationAttributes,
  FacturaAttributes,
  FacturaCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Empresa = _Empresa.initModel(sequelize);
  const Factura = _Factura.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);

  Factura.belongsTo(Usuario, { as: "rut_Usuario", foreignKey: "rut"});
  Usuario.hasMany(Factura, { as: "Facturas", foreignKey: "rut"});

  return {
    Empresa: Empresa,
    Factura: Factura,
    Usuario: Usuario,
  };
}
