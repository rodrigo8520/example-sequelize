npm init -y
npm i typecript @types/node
npm install typescript --save-dev
npm install --save sequelize
npm install --save mysql2
npm install --save-dev @types/node @types/validator
npm install sequelize reflect-metadata sequelize-typescript
npm i express
npm i @types/express
npm i morgan
npm i @types/morgan
npm i express-jsdoc-swagger
npm i express-validator

npm i sequelize-typescript
crear tsconfig.json 


sequelize-auto -o "./src/models" -h localhost -d facturacionDb -u factur -p 3306 -x 'abc123' -l ts

```bash
npm run start
```