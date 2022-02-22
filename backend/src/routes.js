const express = require('express');

const ConsultorController = require('./controllers/ConsultorController');
const ClientController = require('./controllers/ClientController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/consultors', ConsultorController.index);
routes.post('/consultors', ConsultorController.create);

routes.get('/profile', ProfileController.index);  

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.delete('/clients/:id', ClientController.delete);

module.exports = routes;