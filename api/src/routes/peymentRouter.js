const { Router } = require('express');
const { cartOrderHandler, successCartHandler, webhooCartHandler } = require("../handlers/cartOrderHandler");

const peymentRouter = Router();

peymentRouter.get("/cart/create-order", cartOrderHandler);

// peymentRouter.get("/cart/success", successCartHandler);

// peymentRouter.get("/cart/webhook", webhooCartHandler);


module.exports = peymentRouter