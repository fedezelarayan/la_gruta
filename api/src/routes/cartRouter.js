const { Router } = require('express');
const { addToCartHandler, removeFromCartHandler, getUserCartHandler } = require('../handlers/cartHandler');


const cartRouter = Router();

cartRouter.get('/:user_id', getUserCartHandler);

cartRouter.post('/add', addToCartHandler);

cartRouter.delete('/remove', removeFromCartHandler);

module.exports = cartRouter;