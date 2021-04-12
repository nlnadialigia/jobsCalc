// eslint-disable-next-line prettier/prettier
import { Router } from 'express';

const routes = Router();

const profile = {
  name: 'Nadia Ligia',
  avatar: 'https://github.com/nlnadialigia.png',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4,
};

const jobs = [];

routes.get('/', (request, response) => response.render('index.ejs', { profile }));
routes.get('/job', (request, response) => response.render('job.ejs'));
routes.post('/job', (request, response) => {
  // { name: 'asdfg', 'daily-hours': '3', 'total-hours': '3' }
  jobs.push(request.body);

  return response.redirect('/');
});
routes.get('/job/edit', (request, response) => response.render('job-edit.ejs'));
routes.get('/profile', (request, response) => response.render('profile.ejs', { profile }));

export default routes;
