/* eslint-disable import/extensions */
import express from 'express';
import routes from './routes.js';

const server = express();

server.use(express.static('public'));
server.use(routes);

server.listen(5010, () => console.log('Server is running!'));
