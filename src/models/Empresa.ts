import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmpresaAttributes {
  id: number;
  direccion?: string;
  telefono?: number;
  fechaCreacion?: string;
  fechaModificacion?: Date;
}

export type EmpresaPk = "id";
export type EmpresaId = Empresa[EmpresaPk];
export type EmpresaOptionalAttributes = "id" | "direccion" | "telefono" | "fechaCreacion" | "fechaModificacion";
export type EmpresaCreationAttributes = Optional<EmpresaAttributes, EmpresaOptionalAttributes>;

export class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> implements EmpresaAttributes {
  id!: number;
  direccion?: string;
  telefono?: number;
  fechaCreacion?: string;
  fechaModificacion?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Empresa {
    return Empresa.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
