// eslint-disable-next-line prettier/prettier
import { Router } from 'express';
import path from 'path';

const routes = Router();

const __dirname = path.resolve(path.dirname(''));
const basePath = `${__dirname}/views`;

routes.get('/', (request, response) => response.sendFile(`${basePath}/index.html`));
routes.get('/job', (request, response) => response.sendFile(`${basePath}/job.html`));
routes.get('/job/edit', (request, response) => response.sendFile(`${basePath}/job-edit.html`));
routes.get('/profile', (request, response) => response.sendFile(`${basePath}/profile.html`));

export default routes;
