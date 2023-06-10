//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console
  });
});
