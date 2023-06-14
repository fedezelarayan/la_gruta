const {
    getAllActivity,
    createActivity,
    deleteActivity,
}= require("../controllers/ActivityControllers");


// Handler para traer las actividades //
const getAllActivityHandler = async (req, res) => {
   try{
    const  allActivity = await getAllActivity();
    res.status(200).json(allActivity);

   }catch (error) {
    res.status(400).json({error: error.message});
   }

};

// Handler para postear la actividad//
const postActivityHandler = async (req, res)=> {
    const {name, description, class_activity, date, img} = req.body;

    try{
        await createActivity({name, description, class_activity, date, img});
        res.status(200).json("Actividad creada con exito");
    }catch (error) {
        res.status(400).json({error: error.message});
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


module.exports = {
    getAllActivityHandler,
    postActivityHandler,
    deleteActivityHandler,

};