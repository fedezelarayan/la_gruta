const {
    getAllProductsTypes,
    getAllActivityTypes
} = require ('../controllers/roomTypeController')


const getAllProductsTypesHandler = async (req, res) => {
    try {
        const allProductsTypes = await getAllProductsTypes();
        res.status(200).json(allProductsTypes); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const getAllActivityTypesHandler = async (req, res) => {
    try {
        const allactivityTypes = await getAllActivityTypes();
        res.status(200).json(allactivityTypes); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {getAllProductsTypesHandler, getAllActivityTypesHandler};