
const { getAllChildren } = require('../controllers/childrenControllers/getChildren')

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
    try {
        res.status(200).send('En esta ruta se crearía un nuevo niño (NIY)')
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
