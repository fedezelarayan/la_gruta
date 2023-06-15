
const { getAllChildren, createNewChild, deleteChild } = require('../controllers/childrenControllers')

//*  ----------------------Get All--------------------------------------------

const getAllChildrenHandler = async (req, res) => {
    try {
        const allChildren = await getAllChildren();
        res.status(200).json(allChildren);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//* ----------------------Post Child------------------------------------------

const postChildrenHandler = async (req, res) => {
    const { name, edad, history, image } = req.body;
    try {
        const newChild = await createNewChild(name, edad ,history, image)
        res.status(200).json({newChild, msg: 'Niño creado exitosamente'});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//* ----------------------Delete Child----------------------------------------

const deleteChildrenHandler = async (req, res) => {
    const { id_child } = req.params;
    try {
        const deletedChild = await deleteChild(id_child);
        res.status(200).json({msg: 'Niño eliminado correctamente.'});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllChildrenHandler, postChildrenHandler, deleteChildrenHandler }
