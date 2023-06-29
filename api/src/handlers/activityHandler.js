const {
  getAllActivity,
  getActivityById,
  createActivity,
  deleteActivity,
  restoreActivity,
} = require("../controllers/ActivityControllers");


// Handler para traer las actividades //
const getAllActivityHandler = async (req, res) => {
  const { offset } = req.query
  try {
    const allActivity = await getAllActivity(offset);
    res.status(200).json(allActivity);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};


const getActivityIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const activityById = await getActivityById(id);
    res.status(200).json(activityById);
  } catch (error) {
    res.status(400).json({ error: error.mesasge })
  }
};

// Handler para postear la actividad//
const postActivityHandler = async (req, res) => {
  const { name, description, type_activity, date, img } = req.body;

  try {
    await createActivity({ name, description, type_activity, date, img });
    res.status(200).json("Actividad creada con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que borra la actividad
const deleteActivityHandler = async (req, res) => {
  const { id_activity } = req.params;

  try {
    await deleteActivity(id_activity);
    res.status(200).json("Actividad eliminada con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que restaurar la actividad
const restoreActivityHandler = async (req, res) => {
  const { id_restore } = req.params;

  try {
    await restoreActivity(id_restore);
    res.status(200).json("Actividad se restauro con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllActivityHandler,
  postActivityHandler,
  deleteActivityHandler,
  getActivityIdHandler,
  restoreActivityHandler
};