const { Router } = require('express');
const { addToCartHandler } = require('../handlers/cartHandler');


const cartRouter = Router();

cartRouter.post('/add', addToCartHandler);

module.exports = cartRouter;