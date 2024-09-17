const { Router } = require('express');
const { formVoluntarioHandler, formPadrinoHandler, formFooterHandler, formDonacionHandler } = require('../handlers/formsHandler');

const formsRouter = Router();

formsRouter.post('/formVoluntario', formVoluntarioHandler);
formsRouter.post('/formPadrino', formPadrinoHandler);
formsRouter.post('/formFooter', formFooterHandler);
formsRouter.post('/formDonacion', formDonacionHandler);

module.exports = formsRouter;
