import { Model, Optional, Sequelize } from 'sequelize';
import { Empresa } from "../models/Empresa";
//get = listar
//put = actualizar
//post = agragar 

class EmpresaServices {

    public empresas
    public conexion

    constructor() {

        this.empresas = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        // try {
        //     this.conexion.authenticate();
        //     console.log('Connection facturacionDb has been established successfully.');
        // } catch (error) {
        //     console.error('Unable to connect to the database facturacionDb:', error);
        // }
    }

    async getEmpresa() {

        // const sequelize = new Sequelize('database', 'username', 'password', {
        //     host: 'localhost',
        //     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
        //   });
        //const sequelize = new Sequelize();
        const EmpresaModel = await Empresa.initModel(this.conexion);
        const mod = await EmpresaModel.findAll();
        //const mod = await EmpresaModel.findByPk();

        console.log(mod.every(id => id instanceof Empresa)); // true
        console.log("All mod:", JSON.stringify(mod, null, 2));

        return mod;


    }

    async getEmpresaId(id: number) {

        const EmpresaModel = await Empresa.initModel(this.conexion);
        const mod = await EmpresaModel.findByPk(id);
        console.log("getEmpresaId Service");

        return mod;

    }

    //actualizaar
    async putEmpresa(id: number, empresa: any) {

        const EmpresaUp = await Empresa.initModel(this.conexion)
        const up = await EmpresaUp.findByPk(id);

        // const ups = await EmpresaUp.update({
        //     direccion: "villa alemana 123",
        //     telefono: 555555
        // }, {
        //     where: {
        //         id: 8
        //     }
        // });
        console.log("putEmpresa Ok")
        await up.update(empresa);

        //return up;


    }

    async postEmpresa(empresa: any) {

        const EmpreId = await Empresa.initModel(this.conexion);
        console.log("postEmpresa services OK");
        const empresaid = await EmpreId.create(
            //opcion 1 Trae al objeto entero no se usa, puede traer problemas
            //empresa      

            //opcion 2  Se escribe cada uno de los 
            // {
            //     direccion: empresa.direccion,                
            //     telefono: empresa.telefono,
            //     fechaCreacion: empresa.fechaCreacion,
            //     fechaModificacion: new Date()
            // }
            //opcion 3  Tecnica de los 3 puntos
            //   Trae el objeto entero + elementos extras que uno quiera
            {
                ...empresa,
                fechaModificacion: new Date()
            }

        )

    }



    async deleteEmpresa(id: number) {

        const EmpresaDele = await Empresa.initModel(this.conexion)
        // const dele = await EmpresaDele.destroy({
        //     where: {
        //         id: 2
        //     }
        // });

        try {
            const empresa = await Empresa.findByPk(id);
            await empresa.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteEmpresa service");
            throw new Error("Error en deleteEmpresa service");
        }
    }


}

export default EmpresaServices