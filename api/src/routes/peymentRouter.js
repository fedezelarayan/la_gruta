const { Router } = require('express');
const { cartOrderHandler, successCartHandler, webhooCartHandler } = require("../handlers/paymentHandler");

const peymentRouter = Router();

peymentRouter.get("/cart/create-order/:user_id", cartOrderHandler);

// peymentRouter.get("/cart/success", successCartHandler);

// peymentRouter.get("/cart/webhook", webhooCartHandler);


module.exports = peymentRouter