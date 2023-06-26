const formsController = require('../controllers/formController');

const formsHandler = async (req, res) => {
  try {
    // Obtén los datos del formulario desde req.body

    // Llama al controlador para procesar la lógica del formulario
    await formsController.processForm(req.body);

    res.send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
};

module.exports = {
    formsHandler,
};
