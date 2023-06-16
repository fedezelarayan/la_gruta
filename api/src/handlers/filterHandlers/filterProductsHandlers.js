const {
    /* filtroPrecio, */
    filtroTipo,
    filtroNombre
} = require ('../../controllers/filterControllers/filterProductControllers');

/* const orderByPrice = async (req, res) => {
    const { price } = req.query;
    try {
        const filteredProducts = await filtroPrecio(price);
        res.status(200).json(filteredProducts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} */

const filterByType = async (req, res) => {
    const { productType } = req.query;
    try {
        const filteredByType = await filtroTipo(productType);
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

/* http://localhost:3001/filter/byType?productType=Otcom    Topiramate*/