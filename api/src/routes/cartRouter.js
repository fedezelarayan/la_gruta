const { Router } = require('express');
const { addToCartHandler, removeFromCartHandler } = require('../handlers/cartHandler');


const cartRouter = Router();

cartRouter.post('/add', addToCartHandler);
cartRouter.delete('/remove', removeFromCartHandler)

module.exports = cartRouter;