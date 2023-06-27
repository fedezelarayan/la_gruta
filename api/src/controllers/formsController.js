const transporter = require('../utils/nodemailer');

const formVoluntario = async (formData) => {
  try {
    const email = formData.mail;
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      text: 'Plaintext version of the message',
      html: '<p>VOLUNTARIO</p>',
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

const formPadrino = async (formData) => {
  try {
    // Configura el mensaje de correo
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: 'sofiaparraweb@gmail.com', // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      text: 'Plaintext version of the message',
      html: '<p>PADRINO</p>',
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

const formFooter = async (formData) => {
  try {
    // Configura el mensaje de correo
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: 'sofiaparraweb@gmail.com', // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      text: 'Plaintext version of the message',
      html: '<p>FOOTER</p>',
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

const formDonacion = async (formData) => {
  try {
    // Configura el mensaje de correo
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: 'sofiaparraweb@gmail.com', // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      text: 'DONACION',
      html: '<p>HTML version of the message</p>',
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  formVoluntario,
  formPadrino,
  formFooter,
  formDonacion,
 };