//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;
/* const CreateInformation = require("./src/controllers/CreateInformation"); */
const { ActivityType } = require('../api/src/db');
const { default: axios } = require("axios");
const { testDataUploader, testDataCheck } = require('./src/utils/testDataUpload');


conn.sync({ force: true }).then(async () => {

  /* CreateInformation(); */

  const { activitiesCheck, productsCheck } = await testDataCheck();
  
  console.log(activitiesCheck, productsCheck);
    
  if( productsCheck === 0 && activitiesCheck === 0){
      await testDataUploader()
  } else {
      console.log('Los datos ya estaban cargados');
  }

  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console

  });
});


