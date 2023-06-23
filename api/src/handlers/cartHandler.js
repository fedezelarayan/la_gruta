const { addToCart } = require('../controllers/cartControllers')

const addToCartHandler = async (req, res) => {
    const { user_id, product_id, quantity } = req.query;
    try {
        const addedProduct = await addToCart( user_id, product_id, quantity );
        return res.status(200).json(addedProduct);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};

module.exports = { addToCartHandler, }