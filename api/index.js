//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const { testDataUploader } = require('./src/utils/testDataUpload');
const PORT = process.env.PORT || 3001;
const CreateInformation = require("./src/controllers/CreateInformation");
const { ActivityType } = require('../api/src/db');
const { default: axios } = require("axios");

conn.sync({ force: false }).then(() => {
  /* CreateInformation(); */
  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console

  });
});


