import express from 'express';
import path from 'path';
import routes from './routes.js';

const server = express();
const __dirname = path.resolve(path.dirname(''));

server.set('views', `${__dirname}/views`);
server.set('view entine', 'ejs');
server.use(express.static('public'));
server.use(routes);

server.listen(5010, () => console.log('Server is running!'));
