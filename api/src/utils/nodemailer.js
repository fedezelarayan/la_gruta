const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: 'lagrutaweb@gmail.com',
    pass: 'dvpgpzjjfjcxfisp',
  },
});


module.exports = transporter;