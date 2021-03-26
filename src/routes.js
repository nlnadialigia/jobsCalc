// eslint-disable-next-line prettier/prettier
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.render('index.ejs'));
routes.get('/job', (request, response) => response.render('job.ejs'));
routes.get('/job/edit', (request, response) => response.render('job-edit.ejs'));
routes.get('/profile', (request, response) => response.render('profile.ejs'));

export default routes;
