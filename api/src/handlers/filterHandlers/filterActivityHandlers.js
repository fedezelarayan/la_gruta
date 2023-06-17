const {
    /* filtroPrecio, */
    ActivityFilterType,
    filtroNombre
} = require ('../../controllers/filterControllers/filterActivityControllers');


const filterByType = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredByType = await ActivityFilterType(name);
        res.status(200).json({filteredByType});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const filterByName = async (req, res) => {
    const { name } = req.query;
    try {
        const filteredName = await filtroNombre(name);
        res.status(200).json({filteredName});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    /* orderByPrice, */
    filterByType,
    filterByName
}