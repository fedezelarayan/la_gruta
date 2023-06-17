const {
    getAllActivityTypes, 
    getAllProductTypes
} = require ('../controllers/roomTypeControllers')

const getAllActivityTypesHandler = async (req, res) => {
    try {
        const activityTypes = await getAllActivityTypes();
        res.status(200).json(activityTypes);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const getAllProductsTypesHandler = async (req, res) => {
    try {
        const productTypes = await getAllProductTypes();
        res.status(200).json(productTypes);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllProductsTypesHandler,
    getAllActivityTypesHandler
}
