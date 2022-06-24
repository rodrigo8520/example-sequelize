import express from 'express';
import Server from './server'

// rest of the code remains same
// const app = express();
// const PORT = 3000;
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));

const server = new Server();

server.listen();