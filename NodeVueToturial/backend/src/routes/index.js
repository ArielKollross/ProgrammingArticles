const express = require('express');

const routes = express.Router();

const userController = require('../controllers/UserController');
const projectsController = require('../controllers/ProjectsControllers');

routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.delete('/users/:id', userController.delete);

routes.get('/projects', projectsController.index)
routes.get('/projects/:id', projectsController.find)
routes.post('/projects', projectsController.create)
routes.delete('/projects/:id', projectsController.delete);

module.exports = routes;