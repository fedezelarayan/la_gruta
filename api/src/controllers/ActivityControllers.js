const { Activity, ActivityType } = require("../db");
/* const ActivityType = require("../models/ActivityType"); */

//*-----------------GET Activity---------------------
const getAllActivity = async (clic = 0) => {

    const allActivity = await Activity.findAll({include:{model:ActivityType,through:{attributes:[]}},limit: 5, offset: (clic *5) });
  
    if (!allActivity.length) {
      throw new Error("Actividades no encontrados");
    } else {
      return allActivity;
    }
  };

//*-----------------POST Activity---------------------
const createActivity = async ({ name, description, type_activity, date, img }) => {
    if (!name) throw new Error("No puedes enviar un nombre vacío");

    const existingActivity = await Activity.findAll({ where: { name } })
    console.log(existingActivity);

    if (existingActivity.length) {
      throw new Error("La Actividad existe");
    } else {

      const newActivity = await Activity.create({
        name, description, date, img,

      });

      newActivity.addActivityType(type_activity)
      return newActivity;
    }
  };

 /*  const createActivity = async (name, description, class_activity, date, img) => {
    const newActivity = await Activity.create({ name, description, class_activity, date, img })
    newActivity.addActivityType(type)
    return newActivity;
}
 */
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

