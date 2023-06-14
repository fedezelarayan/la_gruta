const { Activity } = require("../db");

//*-----------------GET Activity---------------------
const getAllActivity = async () => {

    const allActivitys = await Activity.findAll();
  
    if (!allActivitys.length) {
      throw new Error("Actividades no encontrados");
    } else {
      return allActivitys;
    }
  };

//*-----------------POST Activity---------------------
const createActivity = async ({ name }) => {
    if (!name) throw new Error("No puedes enviar un nombre vacío");
  
    const activity = await Activity.findOne({ where: { name } });
  
    if (activity) {
      throw new Error("La Actividad existe");
    } else {
      await Activity.create({
        name,

      });
      return;
    }
  };

//*-----------------DELETE Activity---------------------
const deleteActivity = async (id) => {
    const activity = await Activity.findByPk(id);
  
    if (!activity) {
      throw new Error("La actividad no existe");
    } else {
      await Activity.destroy({ where: { id } });
      return;
    }

};
  
  module.exports = { getAllActivity, createActivity, deleteActivity };

