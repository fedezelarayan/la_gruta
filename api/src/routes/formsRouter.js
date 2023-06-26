const { Router } = require('express');
const { formsHandler } = require('../handlers/formsHandler');

const formsRouter = Router();

formsRouterrouter.post('/formVoluntario', formsHandler);

module.exports = formsRouter;
