
const { getAllChildren, createNewChild } = require('../controllers/childrenControllers')

//  ----------------------Get All--------------------------------------------

const getAllChildrenHandler = async (req, res) => {
    try {
        const allChildren = await getAllChildren();
        res.status(200).json(allChildren);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// ----------------------Post Child------------------------------------------

const postChildrenHandler = async (req, res) => {
    const { name, edad, history, image } = req.body;
    try {
        createNewChild(name, edad ,history, image)
        res.status(200).json(newChild);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// ----------------------Delete Child----------------------------------------

const deleteChildrenHandler = async (req, res) => {
    try {
        res.status(200).send('En esta ruta se eliminaría un niño (NIY)')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllChildrenHandler, postChildrenHandler, deleteChildrenHandler }
