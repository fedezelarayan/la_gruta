
const { getAllChildren } = require('../controllers/childrenControllers/getChildren')

const getAllChildrenHandler = async (req, res) => {
    try {
        const allChildren = await getAllChildren();
        res.status(200).send(allChildren);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { getAllChildrenHandler }