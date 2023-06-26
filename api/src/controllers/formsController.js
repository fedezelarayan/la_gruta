const transporter = require('../utils/nodemailer');

const processForm = async (formData) => {
  try {
    // Configura el mensaje de correo
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: formData.email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      text: 'Plaintext version of the message',
      html: '<p>HTML version of the message</p>',
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  processForm,
};
