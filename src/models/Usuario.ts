import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Factura, FacturaId } from './Factura';

export interface UsuarioAttributes {
  rut: number;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono?: number;
  email?: string;
}

export type UsuarioPk = "rut";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "rut" | "telefono" | "email";
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  rut!: number;
  nombre!: string;
  apellido!: string;
  direccion!: string;
  telefono?: number;
  email?: string;

  // Usuario hasMany Factura via rut
  Facturas!: Factura[];
  getFacturas!: Sequelize.HasManyGetAssociationsMixin<Factura>;
  setFacturas!: Sequelize.HasManySetAssociationsMixin<Factura, FacturaId>;
  addFactura!: Sequelize.HasManyAddAssociationMixin<Factura, FacturaId>;
  addFacturas!: Sequelize.HasManyAddAssociationsMixin<Factura, FacturaId>;
  createFactura!: Sequelize.HasManyCreateAssociationMixin<Factura>;
  removeFactura!: Sequelize.HasManyRemoveAssociationMixin<Factura, FacturaId>;
  removeFacturas!: Sequelize.HasManyRemoveAssociationsMixin<Factura, FacturaId>;
  hasFactura!: Sequelize.HasManyHasAssociationMixin<Factura, FacturaId>;
  hasFacturas!: Sequelize.HasManyHasAssociationsMixin<Factura, FacturaId>;
  countFacturas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
    rut: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  }
}
