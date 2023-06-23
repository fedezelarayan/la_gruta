const formsController = require('../controllers/formsController');

const formVoluntarioHandler = async (req, res) => {
  try {
    await formsController.formVoluntario(req.body); 
    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};

const formPadrinoHandler = async (req, res) => {
  try {
    await formsController.formPadrino(req.body); 
    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};

const formFooterHandler = async (req, res) => {
  try {
    await formsController.formFooter(req.body); 
    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};

const formDonacionHandler = async (req, res) => {
  try {
    await formsController.formDonacion(req.body); 
    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};

module.exports = {
    formVoluntarioHandler,
    formPadrinoHandler,
    formFooterHandler,
    formDonacionHandler
};
