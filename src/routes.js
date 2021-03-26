// eslint-disable-next-line prettier/prettier
import { Router } from 'express';

const routes = Router();

const profile = {
  name: 'Nadia Ligia',
  avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGfLLgnNN0QGQ/profile-displayphoto-shrink_800_800/0/1616341622869?e=1622073600&v=beta&t=Ls7FVz1KleyClTG5WhFzlYlOt0ASm1Lkn65iKZVfjGQ',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4,
};

routes.get('/', (request, response) => response.render('index.ejs', { profile }));
routes.get('/job', (request, response) => response.render('job.ejs'));
routes.get('/job/edit', (request, response) => response.render('job-edit.ejs'));
routes.get('/profile', (request, response) => response.render('profile.ejs', { profile }));

export default routes;
