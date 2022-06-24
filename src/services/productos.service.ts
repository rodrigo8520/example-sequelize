
import faker from "@faker-js/faker";


class Productos {

    public products 
    //Fake data (Libreria para generar información random)
    constructor() {
        this.products = []
        this.generate()
    }

    async generate() {
        const limite = 100 //Iniciar con 100 productos de ejemplo
        for (let i = 0; i < limite; i++) {
            this.products.push({
                //Generando datos aleatorios
                uuid: faker.datatype.uuid(),
                nombre: faker.commerce.productName(),
                precio: parseInt(faker.commerce.price(), 10),
                color: faker.commerce.color(),
                //description: faker.commerce.productDescription()
            })
        }
    }
    
    async getProduct()  {

        return this.products;
    }

    async getProductName()  {

        return this.products;
    }

}

export default Productos