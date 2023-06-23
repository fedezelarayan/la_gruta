const { addToCart, removeFromCart } = require('../controllers/cartControllers')

const addToCartHandler = async (req, res) => {
    const { user_id, product_id, quantity } = req.query;
    try {
        const addedProduct = await addToCart( user_id, product_id, quantity );
        return res.status(200).json(addedProduct);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};

const removeFromCartHandler = async (req, res) => {
    const { user_id, product_id } = req.query;
    try {
        await removeFromCart( user_id, product_id );
        return res.status(200).json({msg: 'Se ha quitado el producto del carrito con exito'});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = { addToCartHandler, }