// eslint-disable-next-line prettier/prettier
import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const routes = Router();

routes.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

export default routes;
