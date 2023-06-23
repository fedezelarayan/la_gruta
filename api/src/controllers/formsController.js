const transporter = require('../utils/nodemailer');

const formVoluntario = async (formData) => {
  try {
    const emailUsuario = formData.email;
    const nombre = formData.name;
    const telefono = formData.phone;
    const role = formData.role;

    // Correo para enviar a la fundación
    const mensajeFundacion = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: 'lagrutacdi@gmail.com', // Dirección de correo de la fundación
      subject: 'Nueva solicitud de voluntario en LA GRUTA',
      html: `
        <div style="background-color: #f3f3f3; padding: 20px;">
          <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">Nueva solicitud de voluntario en LA GRUTA</h1>
          <p style="color: #555555;">¡Hola!</p>
          <p style="color: #555555;">Se ha recibido una nueva solicitud de voluntario en LA GRUTA.</p>
          <p style="color: #555555;">Datos del solicitante:</p>
          <p style="color: #555555;">Nombre: ${nombre}</p>
          <p style="color: #555555;">Teléfono: ${telefono}</p>
          <p style="color: #555555;">Campo de interés: ${role}</p>
          <p style="color: #555555;">Por favor, ponte en contacto con el solicitante para brindarle más información sobre cómo convertirse en voluntario.</p>
          <p style="color: #555555;">Saludos,</p>
          <p style="color: #555555;">Equipo de LA GRUTA</p>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png' style="width: 200px; height: auto;"/>
        </div>
      `,
    };

    // Correo para enviar al usuario
    const mensajeUsuario = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: emailUsuario,
      subject: 'Gracias por interesarte en ser voluntario de LA GRUTA!',
      html: `
        <div style="background-color: #f3f3f3; padding: 20px;">
          <h1 style="color: #B9362C; font-family: 'dk-lemon-yellow-sun', sans-serif;">¡Gracias por interesarte en ser voluntario de LA GRUTA!</h1>
          <p style="color: #555555;">Hola ${nombre},</p>
          <p style="color: #555555;">Agradecemos tu interés en participar como voluntario y apoyar nuestra causa. Estamos emocionados de contar contigo.</p>
          <p style="color: #555555;">Pronto nos pondremos en contacto contigo al número de teléfono proporcionado (${telefono}) para brindarte más información sobre cómo puedes contribuir</p>
          <p style="color: #555555;">¡Esperamos contar contigo como parte de nuestra familia de LA GRUTA!</p>
          <p style="color: #555555;">Saludos,</p>
          <p style="color: #555555;">Equipo de LA GRUTA</p>
        </div>
      `,
    };
    await Promise.all([
      transporter.sendMail(mensajeFundacion),
      transporter.sendMail(mensajeUsuario),
    ]);
  } catch (error) {
    throw error;
  }
};


const formPadrino = async (formData) => {
  try {
    const emailUsuario = formData.email;
    const nombre = formData.name;
    const telefono = formData.phone;

    // Correo para enviar a la fundación
    const mensajeFundacion = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: 'lagrutacdi@gmail.com', // Dirección de correo de la fundación
      subject: 'Nueva solicitud de padrino en LA GRUTA',
      html: `
        <div style="background-color: #f3f3f3; padding: 20px;">
          <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">Nueva solicitud de padrino en LA GRUTA</h1>
          <p style="color: #555555;">¡Hola!</p>
          <p style="color: #555555;">Se ha recibido una nueva solicitud de padrino en LA GRUTA.</p>
          <p style="color: #555555;">Datos del solicitante:</p>
          <p style="color: #555555;">Nombre: ${nombre}</p>
          <p style="color: #555555;">Teléfono: ${telefono}</p>
          <p style="color: #555555;">Por favor, ponte en contacto con el solicitante para brindarle más información sobre cómo convertirse en padrino.</p>
          <p style="color: #555555;">Saludos,</p>
          <p style="color: #555555;">Equipo de LA GRUTA</p>
        </div>
      `,
    };

    // Correo para enviar al usuario
    const mensajeUsuario = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: emailUsuario,
      subject: 'Gracias por interesarte en ser padrino de LA GRUTA!',
      html: `
        <div style="background-color: #f3f3f3; padding: 20px;">
          <h1 style="color: #B9362C; font-family: 'dk-lemon-yellow-sun', sans-serif;">¡Gracias por interesarte en ser padrino de LA GRUTA!</h1>
          <p style="color: #555555;">Hola ${nombre},</p>
          <p style="color: #555555;">Agradecemos tu interés en participar como padrino y apoyar nuestra causa. Estamos emocionados de contar contigo.</p>
          <p style="color: #555555;">Pronto nos pondremos en contacto contigo al número de teléfono proporcionado (${telefono}) para brindarte más información sobre cómo puedes contribuir y convertirte en padrino.</p>
          <p style="color: #555555;">¡Esperamos contar contigo como parte de nuestra familia de padrinos de LA GRUTA!</p>
          <p style="color: #555555;">Saludos,</p>
          <p style="color: #555555;">Equipo de LA GRUTA</p>
        </div>
      `,
    };
    await Promise.all([
      transporter.sendMail(mensajeFundacion),
      transporter.sendMail(mensajeUsuario),
    ]);
  } catch (error) {
    throw error;
  }
};



const formFooter = async (formData) => {
  try {
    const email = formData.email;
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
      subject: 'Gracias por completar el formulario de LA GRUTA!',
      html: `
        <div style="background-color: #f3f3f3; padding: 20px;">
          <h1 style="color: #B9362C; font-family: 'wicked-grit', sans-serif;">Gracias por suscribirte a LA GRUTA!</h1>
          <p style="color: #555555;">¡Hola!</p>
          <p style="color: #555555;">Agradecemos tu interés en recibir información sobre nuestra fundación.</p>
          <p style="color: #555555;">Estamos emocionados de contar contigo como parte de nuestra comunidad y te mantendremos actualizado(a) sobre nuestras actividades y proyectos.</p>
          <p style="color: #555555;">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
          <p style="color: #555555;">¡Saludos!</p>
          <p style="color: #555555;">Equipo de LA GRUTA</p>
        </div>
      `,
    };

    // Envía el correo electrónico utilizando el transporter
    await transporter.sendMail(mensajeCorreo);
  } catch (error) {
    throw error;
  }
};


const formDonacion = async (formData) => {
  try {
    const email = formData.mail;
    const mensajeCorreo = {
      from: '"LA GRUTA" <lagrutaweb@gmail.com>',
      to: email, // Asegúrate de obtener el correo electrónico del usuario desde los datos del formulario
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