
import express, { Request, Response } from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import morgan from 'morgan';
import router from './router';

class Server {

    public app = express();
    public port = 3000;

    constructor() {

        // lectura parse del body
        this.app.use(express.json({
            limit: '5MB'
        }));

        //Morgan http loger
        morgan.token('body', (req: Request, res) => {

            const resp = JSON.stringify(req.body)
            return resp.substring(0, 1000);
        });
        //app.use(morgan('tiny'));
        //this.app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
        this.app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));
        console.log("Morgan OK");

        // se genera aca la url base
        this.app.use('/v1', router);
        console.log("Iniciando Routes");

        const options = {
            info: {
                version: '1.0.0',
                title: 'Empresa Pro',
                license: {
                    name: 'MIT',
                },
            },
            security: {
                BasicAuth: {
                    type: 'http',
                    scheme: 'basic',
                },
            },
            baseDir: __dirname,
            // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
            filesPattern: './**/*.ts',
            // URL where SwaggerUI will be rendered
            swaggerUIPath: '/api-docs',
            // Expose OpenAPI UI
            exposeSwaggerUI: true,
            // Expose Open API JSON Docs documentation in `apiDocsPath` path.
            exposeApiDocs: false,
            // Open API JSON Docs endpoint.
            apiDocsPath: '/api-docs',
            // Set non-required fields as nullable by default
            notRequiredAsNullable: false,
            // You can customize your UI options.
            // you can extend swagger-ui-express config. You can checkout an example of this
            // in the `example/configuration/swaggerOptions.js`
            swaggerUiOptions: {},
        };

        
        // implementacion swagger
        console.log("Iniciando swagger")
        expressJSDocSwagger(this.app)(options);
        console.log("Swagger OK");

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto", this.port);
        })
    }

}

export default Server