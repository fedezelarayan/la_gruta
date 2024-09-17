const { Router } = require('express');
const { addToCartHandler, removeFromCartHandler, getUserCartHandler, changeQuantityHandler, emptyCartHandler } = require('../handlers/cartHandler');


const cartRouter = Router();

cartRouter.get('/:user_id', getUserCartHandler);

cartRouter.post('/add', addToCartHandler);

cartRouter.delete('/remove', removeFromCartHandler); //! Este falta chequear todavía

cartRouter.delete('/removeAll', emptyCartHandler); //! Este elimina todo del carrito

cartRouter.put('/', changeQuantityHandler);

module.exports = cartRouter;