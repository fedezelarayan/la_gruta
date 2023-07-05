const { addToCart, removeFromCart, getUserCart, changeQuantity, emptyCart } = require('../controllers/cartControllers');



const getUserCartHandler = async (req, res) => {
    const { user_id } = req.params;
    try {
        const cart = await getUserCart( user_id );
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

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

const changeQuantityHandler = async (req, res) => {
    const { user_id, product_id, quantity } = req.query;
    try {
        const changedProduct = await changeQuantity(user_id, product_id, quantity);
        return res.status(201).json(changedProduct);
    } catch (error) {
        return res.status(500).json({error: error.message, msg: 'Este es el error de el put'})
    }
}

const emptyCartHandler = async (req, res) => {
    const { user_id } = req.query;
    try {
        const cart = await emptyCart( user_id );
        res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

module.exports = { addToCartHandler, removeFromCartHandler, getUserCartHandler, changeQuantityHandler, emptyCartHandler }